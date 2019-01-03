module.exports = app => {
	const Users = app.db.models.Users;
	app.all("/user", app.auth.authenticate())
		.get("/user", (req, res) => {
			Users.findById(req.user.id, {
				attributes: ["id", "name", "email"]
			})
				.then(result => res.json(result))
				.catch(error => {
					res.status(412).json({msg: error.message});
				});
		})
		.delete("/user", (req, res) => {
			Users.destroy({where: {id: req.user.id}})
				.then(result => res.json(result))
				.catch(error => {
					res.status(412).json({msg: error.message});
				});
	});

	app.post("/users", (req, res) => {
		Users.create(req.body)
			.then(result => res.json(result))
			.catch(error => {
				res.status(412).json({msg: error.message});
			});
	});
};