const log = require('../util/log');

function assertNoDuplicates(arr) {

    let map = arr.reduce((acc, cur) => {

        acc[cur.key] = acc[cur.key] || 0;
        acc[cur.key]++;
        return acc;
    }, {});

    let duplicates = Object.keys(map).filter(item => map[item] > 1);

    duplicates.forEach(item => { log.error('Duplicate translation key: ' + item) });

    return duplicates.length == 0;
}


module.exports = assertNoDuplicates;