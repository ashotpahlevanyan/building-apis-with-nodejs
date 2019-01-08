import fs from "fs";
import winston from "winston";

if(!fs.existsSync("logs")) {
	fs.mkdirSync("logs");
}

const logger = winston.createLogger({
	transports: [
		new winston.transports.File({
			level: "error",
			filename: "logs/error.log",
			maxsize: 1048576,
			maxFiles: 10,
			colorize: false
		}),
		new winston.transports.File({
			level: "info",
			filename: "logs/app.log",
			maxsize: 1048576,
			maxFiles: 10,
			colorize: false
		})
	]
});

if (process.env.NODE_ENV !== 'production') {
	logger.add(new winston.transports.Console({
		format: winston.format.simple()
	}));
}

module.exports = logger;