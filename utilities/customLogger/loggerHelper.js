const fs = require('fs');
const path = require('path');
const winston = require('winston');

class Logger {
    static initialize(fileName) {
        if (!Logger.logger) {
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

            Logger.logger = winston.createLogger({
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

            Logger.logger.info('-----------------------------');
            Logger.logger.info('LOGGER setup complete');
            Logger.logger.info('-----------------------------');
            Logger.logger.info(`generating log file at ${reportFolderPath}/${loggerFileName}`);
        }
    }

    static log(level, message) {
        Logger.initialize(); // Ensure logger is initialized
        Logger.logger.log(level, message);
    }

    static info(message) {
        Logger.log('info', message);
    }

    static error(message, error) {
        Logger.initialize(); // Ensure logger is initialized
        Logger.logger.error(`${message}: ${error.stack || error.message}`, message);
    }
}

module.exports = Logger;
