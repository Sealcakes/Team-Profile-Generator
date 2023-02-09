const Engineer = require('../lib/engineer');

// Tests the entirety of the Engineer Class
describe("Engineer class", () => {
    // Tests the creation of a new engineer object
    describe("Create new engineer object", () => {
        it("Should create a new engineer object", () => {
            const engineer = new Engineer("Jacob", 234, "jacob@test.com", "thejacobyouknow");

            expect(engineer.name).toBe("Jacob");
            expect(engineer.id).toEqual(expect.any(Number));
            expect(engineer.email).toEqual(expect.any(String));
            expect(engineer.github).toEqual(expect.any(String));
        });
    });

    // Tests the getGithub method
    describe("getGithub method", () => {
        it("Should return the engineer's github username", () => {
            const engineer = new Engineer("Jacob", 234, "jacob@test.com", "thejacobyouknow");

            expect(engineer.getGithub()).toEqual(expect.any(String));
        });
    });

    // Tests the getRole method
    describe("getRole method", () => {
        it("Should return the engineer's role of Engineer", () => {
            const engineer = new Engineer("Jacob", 234, "jacob@test.com", "thejacobyouknow");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});