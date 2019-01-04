describe("Routes: Token", () => {
	const Users = app.db.models.Users;
	describe("POST /token", () => {
		beforeEach(done => {
			//runs beforeeach test
		});
		describe("status 200", () => {
			it("returns authenticated user token", done => {
				// Test's logic
			});
		});
		describe("status 401", () => {
			it("throws error when password is incorrect", done => {
				// Test's logic
			});
			it("throws error when email not exist", done => {
				// Test's logic
			});
			it("throws error when email and password are blank", done => {
				// Test's logic
			});
		});
	});
});