module.exports = app => {
  const Tasks = app.db.models.Tasks;
	app.get("/tasks", (req, res) => {
	    Tasks.findAll({})
		    .then(result => res.json(result))
		    .catch(error => {
		    	res.status(412).json({msg: error.message});
		    });
		})
		.post("/tasks", (req, res) => {
			Tasks.create(req.body)
				.then(result => res.json(result))
				.catch(error => {
					res.status(412).json({msg: error.message})
				});
	  });

	app.get("/tasks/:id", (req, res) => {
			Tasks.findOne({where: req.params})
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
			Tasks.update(req.body, {where: req.params})
				.then(result => res.sendStatus(204))
				.catch(error => {
					res.status(412).json({msg: error.message});
				});
		})
		.delete("/tasks/:id", (req, res) => {
			Tasks.destroy({where: req.params})
				.then(result => res.sendStatus(204))
				.catch(error => {
					res.status(412).json({msg: error.message})
				});
		});
};
