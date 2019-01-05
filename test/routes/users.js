import jwt from "jwt-simple";

describe("Routes: Users", () => {
	const Users = app.db.models.Users;
	const jwtSecret = app.libs.config.jwtSecret;
	let token;

	beforeEach(done => {
		// Runs before each test
	});

	describe("GET /user", () => {
		describe("status 200", () => {
			it("returns and authenticated user", done => {

			});
		});
	});
	describe("DELETE /user", () => {
		describe("status 204", () => {
			it("deletes and authenticated user", done => {

			});
		});
	});
	describe("POST /users", () => {
		describe("status 200", () => {
			it("creates a new user", done => {

			});
		});
	});
});