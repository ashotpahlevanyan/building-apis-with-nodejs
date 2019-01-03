module.exports = app => {
  const Tasks = app.db.models.Tasks;
	app.route("/tasks")
		.all((req, res) => {
			delete req.body.id;
			next();
		  // middleware for preexecution of routes
	  })
		.get("/tasks", (req, res) => {
	    Tasks.findAll({}).then(tasks => {
	      res.json({tasks: tasks});
	    });
	  })
		.post((req, res) => {

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
