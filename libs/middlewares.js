const PORT = process.env.port || 3000;
const SPACES = 4;

module.exports = app => {
	app.set('port', PORT);
	app.set('json spaces', SPACES);
};