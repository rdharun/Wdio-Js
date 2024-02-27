const fs = require('fs');
const path = require('path');
const winston = require('winston');

class Logger {
    constructor(fileName) {
        const reportFolderPath = `${process.cwd()}/logs`;
        const loggerFileName = fileName || 'log.log'; // Default filename is 'log.log'
        const logFilePath = path.join(reportFolderPath, loggerFileName);

        // Check if logs directory exists, if not, create it
        if (!fs.existsSync(reportFolderPath)) {
            fs.mkdirSync(reportFolderPath);
        }

        // Write to log file, creating it if it doesn't exist
        fs.writeFileSync(logFilePath, '');

        // declare format of the logger
        const myFormat = winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
            winston.format.align(),
            winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
        );

        this.logger = winston.createLogger({
            level: 'debug',
            format: myFormat,
            transports: [
                new winston.transports.File({
                    filename: logFilePath,
                    level: 'info',
                    maxsize: 5120000,
                }),
                new winston.transports.Console({
                    level: 'debug',
                }),
            ],
        });

        this.logger.info('-----------------------------');
        this.logger.info('LOGGER setup complete');
        this.logger.info('-----------------------------');
        this.logger.info(`generating log file at ${reportFolderPath}/${loggerFileName}`);
    }

    log(level, message) {
        this.logger.log(level, message);
    }

    info(message) {
        this.log('info', message);
    }

    error(message, error) {
        this.logger.error(`${message}: ${error.stack || error.message}`, message);
    }
}

module.exports = Logger;
