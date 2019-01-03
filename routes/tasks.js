module.exports = app => {
  const Tasks = app.db.models.Tasks;
	app.all("/tasks", app.auth.authenticate())
		.get("/tasks", (req, res) => {
	    Tasks.findAll({where: { user_id: req.user.id}})
		    .then(result => res.json(result))
		    .catch(error => {
		    	res.status(412).json({msg: error.message});
		    });
		})
		.post("/tasks", (req, res) => {
			req.body.user_id = req.user.id;
			Tasks.create(req.body)
				.then(result => res.json(result))
				.catch(error => {
					res.status(412).json({msg: error.message})
				});
	  });

	app.all(app.auth.authenticate())
		.get("/tasks/:id", (req, res) => {
			Tasks.findOne({where: {
				id: req.params.id,
				user_id: req.user.id
			}})
				.then(result => {
					if(result) {
						res.json(result);
					} else {
						res.sendStatus(404);
					}
				})
				.catch(error => {
					res.status(412).json({msg: error.message});
				});
		})
		.put("/tasks/:id", (req, res) => {
			Tasks.update(req.body, {where: {
				id: req.params.id,
				user_id: req.user.id
			}})
				.then(result => res.sendStatus(204))
				.catch(error => {
					res.status(412).json({msg: error.message});
				});
		})
		.delete("/tasks/:id", (req, res) => {
			Tasks.destroy({where: {
				id: req.params.id,
				user_id: req.user.id
			}})
				.then(result => res.sendStatus(204))
				.catch(error => {
					res.status(412).json({msg: error.message})
				});
		});
};
