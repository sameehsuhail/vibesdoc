const log = require('../util/log');

function assertEmptyTranslations(arr) {
  arr.forEach((item) => {
    const isKeyEmpty = (obj, prop) => obj[prop] === '' || obj[prop] == null;
    const showEmptyKeyWarningMessage = (key) => log.warn(`No ${key.toUpperCase()} translation for ${item.key}, setting key`);

    Object.keys(item).forEach(lang => {
      if (lang === 'key') {
        return;
      }

      if (isKeyEmpty(item, lang)) {
        item[lang] = lang === 'en' ? item.key : item['en'];
        showEmptyKeyWarningMessage(lang);
      }
    })

  });

  return true;
}

module.exports = assertEmptyTranslations;
