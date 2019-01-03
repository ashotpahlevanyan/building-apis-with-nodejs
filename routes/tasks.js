module.exports = app => {
  const Tasks = app.db.models.Tasks;
	app.route("/tasks")
		.all((req, res) => {
			delete req.body.id;
			next();
		  // middleware for preexecution of routes
	  })
		.get("/tasks", (req, res) => {
	    Tasks.findAll({})
		    .then(result => res.json(result))
		    .catch(error => {
		    	res.status(412).json({msg: error.message});
		    })
		})
		.post((req, res) => {
			Tasks.create(req.body)
				.then(result => res.json(result))
				.catch(error => {
					res.status(412).json({msg: error.message})
				})
	  });

	app.route("/tasks/:id")
		.all((req, res) => {
			delete req.body.id;
			next();
			// MIddleware for execution of routes
		})
		.get((req, res) => {
			// /tasks/1 : find a task
		})
		.put((req, res) => {
			// /tasks/1
		})
		.delete((req, res) => {
			// /tasks/1 : delete a task
		});
};
