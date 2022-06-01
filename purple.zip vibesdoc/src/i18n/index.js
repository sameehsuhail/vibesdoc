const XLSX = require('xlsx');
const fs = require('fs');
const log = require('./util/log');

const Handlebars = require('handlebars');
require('handlebars-helpers')({handlebars:Handlebars});

const rules = require('./rules/');

const tsTemplateIndex = Handlebars.compile(fs.readFileSync('./template.ts.index.hbs', 'UTF8'));
const tsTemplateLanguage = Handlebars.compile(fs.readFileSync('./template.ts.language.hbs', 'UTF8'));
const tsTemplateI18N = Handlebars.compile(fs.readFileSync('./template.ts.i18n.hbs', 'UTF8'));

const INPUT = 'excel/i18n.xlsx';

const BASE_PATH = '../assets/i18n';

const OUTPUT_WEB = BASE_PATH + '/i18n.json';

const OUTPUT_TS = BASE_PATH + '/';
const OUTPUT_TS_INDEX = BASE_PATH + '/languages.ts';
const OUTPUT_TS_I18N = BASE_PATH + '/i18n.tsx';

function loadTranslations() {
    const file = XLSX.readFile(INPUT);
    const sheet = file.Sheets[file.SheetNames[0]];

    const translations = XLSX.utils.sheet_to_json(sheet)
        .filter((item) => {
            return item.KEY != null && item.KEY.length > 0
        });

    return translations;
}

function getNamingMap(translation) {
    return Object.keys(translation).filter((prop) => {
        return prop.startsWith('LANG_') || prop === 'KEY';
    }).map((prop) => {
        const naming = {
            propertyName: prop,
            columnName: prop,
        };
        
        if (prop.startsWith('LANG_')) {
            // determine language code by skipping the 'LANG_' prefix
            naming.propertyName = prop.substring(5);
        }

        naming.propertyName = naming.propertyName.toLowerCase();

        return naming;
    });
}

function mapTranslations(translations, languageNamings) {
    return translations.map((item) => {
        const translation = {};

        languageNamings.forEach((naming) => {
            translation[naming.propertyName] = escape(item[naming.columnName]);
        });

        return translation;
    });
}

function escape(str) {
    if (str == null) return null;
    return str.replace(/'/g, "\\'");
}

// outputs a JSON file for validation
function generateWebJson(translations) {
    const output = translations.reduce((acc, cur) => {
        acc[cur.key.toUpperCase()] = cur;
        delete cur.key;
        delete cur.hasVariables;
        return acc;
    }, {});

    fs.writeFileSync(OUTPUT_WEB, JSON.stringify(output, null, 2), 'UTF8');
}

function generateWebJs(translations, languageNamings) {
    let valid = true;

    // Phase 1: validation & collection
    // all assertion methods are executed.
    // if any of these methods return FALSE the process will exit with a error code of 1
    // the idea is to have ALL messages and not to bail on the first one

    rules.forEach(fn => {
        valid = fn(translations) && valid;
    });


    if (!valid) {
        console.log();
        log.error('Failed to build i18 files, exit with statuscode 1');
        process.exit(1);
    }

    // Phase 2: generate DSL
    languageNamings.forEach((lang) => {
        const ts_lang = tsTemplateLanguage({ items: translations, language: lang.propertyName });
        fs.writeFileSync(OUTPUT_TS + lang.propertyName + '.tsx', ts_lang, 'UTF8');
    });

    const ts_i18n = tsTemplateI18N({ items: translations });
    fs.writeFileSync(OUTPUT_TS_I18N, ts_i18n, 'UTF8');

    const ts_ftype = tsTemplateIndex({ languages: languageNamings });
    fs.writeFileSync(OUTPUT_TS_INDEX, ts_ftype, 'UTF8');

    log.info('i18n files generated sucessfully');
}

function main() {
    const translations = loadTranslations();
    const languageNamings = getNamingMap(translations[0]);
    const mappedTranslations = mapTranslations(translations, languageNamings);

    generateWebJs(mappedTranslations, languageNamings);
    generateWebJson(mappedTranslations);
}

main();
