import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import logger from "./logger.js";

const PORT = process.env.port || 3000;
const SPACES = 4;
module.exports = app => {
  app.set("port", PORT);
  app.set("json spaces", SPACES);
	app.use(morgan("common", {
		stream: {
			write: (message) => {
				logger.info(message);
			}
		}
	}));
	app.use(helmet());
	app.use(cors({
		origin: ["http://localhost:3001"],
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"]
	}));
	app.use(compression());
	app.use(bodyParser.json());
	app.use(app.auth.initialize());

	app.use((req, res, next) => {
		delete req.body.id;
		next();
	});
	app.use(express.static("public"));
};
