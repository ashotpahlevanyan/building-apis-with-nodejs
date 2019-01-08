import logger from "./logger.js";

module.exports = {
  database: "moversappseq",
  username: "root",
  password: "mysqlpassword",
	params: {
    dialect: "mysql",
	  logging: (sql) => {
	  	logger.info(`[${new Date()}] ${sql}`);
	  },
    define: {
      underscored: true
    }
  },
	jwtSecret: "Nta$K-AP1",
	jwtSession: {session: false}
};
