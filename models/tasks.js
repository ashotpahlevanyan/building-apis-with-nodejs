module.exports = app => {
	return {
		findAll: (param, callback) => {
			return callback([
				{title: "Buy Some shoes"},
				{title: "Fix Notebook"},
			]);
		}
	};
};