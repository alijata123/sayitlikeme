/* eslint-env node */
const winston = require('winston');
winston.level = process.env.LOG_LEVEL || 'debug';
const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            'timestamp':true
        })
    ]
});
module.exports = logger;
