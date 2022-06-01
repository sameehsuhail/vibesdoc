const log = require('../util/log');

function compareArrays(a1, a2) {

  return a1.length === a2.length && a1.every((v, i) => v === a2[i]);
}

function assertExtractVariables(arr) {
  let returnValue = true;
  let re = /\{.*?\}/igm;

  arr.forEach(item => {

    const matches_en = item.en.match(re);

    if (matches_en != null && matches_en.length > 0) {
      Object.keys(item).forEach(lang => {
        if (lang === 'key' || lang === 'en') {
          return;
        }

        if (!compareArrays(matches_en, item[lang].match(re))) {
          returnValue = false;
          log.error('Variables do not match for entry ' + item.key);
          return;
        }
      })

    }

    if (matches_en != null) {
      item.variables = matches_en.map(item => item.slice(1, -1));

      // replace {variable} with ${variable} for template strings.
      Object.keys(item).forEach(lang => {
        if (lang === 'key' || lang === 'variables') {
          return;
        }
        item[lang] = item[lang].replace(/\{/igm, '${');
      });
    }

    item.hasVariables = item.variables != null && item.variables.length > 0;
  });

  return returnValue;
}

module.exports = assertExtractVariables;
