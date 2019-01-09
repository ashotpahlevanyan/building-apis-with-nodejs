import jwt from "jwt-simple";

module.exports = app => {
	const cfg = app.libs.config;
	const Users = app.db.models.Users;
	/**
	 * @api {post} /token Authentication Token
	 * @apiGroup Credentials
	 * @apiVersion 0.1.2
	 * @apiParam {String} email User email
	 * @apiParam {String} password User password
	 * @apiParamExample {json} Input
	 * {
	 *    "email": "john@connor.net",
	 *    "password": "123456"
	 * }
	 * @apiSuccess {String} token Token of authenticated user
	 * @apiSUccessExample {json} Success
	 *  HTTP/1.1 200 OK
	 *  {"token": "xyz.abc.123.hgf"}
	 * @apiErrorExample {json} Authentication error
	 *  HTTP/1.1 401 Unauthorized
	 * */
	app.post("/token", (req, res) => {
		if(req.body.email && req.body.password) {
			const email = req.body.email;
			const password = req.body.password;
			//console.log(email, password);
			Users.findOne({where: {email: email}})
				.then(user => {
					//console.log(user);
					if(Users.isPassword(user.password, password, user.salt)) {
						const payload = {id: user.id};
						res.json({
							token: jwt.encode(payload, cfg.jwtSecret)
						});
					} else {
						res.sendStatus(401);
					}
				})
				.catch(error => res.sendStatus(401));
		} else {
			res.sendStatus(401);
		}
	});
};