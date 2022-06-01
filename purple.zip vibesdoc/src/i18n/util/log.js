var colors = require('colors/safe');

colors.setTheme({
    info: 'green',
    warn: 'yellow',
    error: 'red'
});

const log = { };

log.warn = (msg) => {
    console.log(colors.warn('(warn) ') + msg);
}

log.error = (msg) => {
    console.log(colors.error('(error) ') + msg);
}

log.info = (msg) => {
    console.log(colors.info(msg));
}

module.exports = log;