import jwt from "jwt-simple";

describe("Routes: Tasks", () => {
	const Users = app.db.models.Users;
	const Tasks = app.db.models.Tasks;

	const jwtSecret = app.libs.config.jwtSecret;
	let token;
	let fakeTask;
	beforeEach(done => {
		// runs before each test
	});

	describe("GET /tasks", () => {
		describe("status 200", () => {
			it("returns a list of tasks", done => {
				// Test's logic
			});
		});
	});
	describe("POST /tasks/", () => {
		describe("status 200", () => {
			it("creates a new task", done => {
				// Test's logic
			});
		});
	});
	describe("GET /tasks/:id", () => {
		describe("status 200", () => {
			it("returns one task", done => {
				// Test's logic
			});
		});
		describe("status 404", () => {
			it("throws error when task not exist", done => {
				// Test's logic
			});
		});
	});
	describe("PUT /tasks/:id", () => {
		describe("status 204", () => {
			it("updates a task", done => {
				// Test's logic
			});
		});
	});
	describe("DETELE /tasks/:id", () => {
		describe("status 204", () => {
			it("removes a task", done => {
				// Test's logic
			});
		});
	});
});