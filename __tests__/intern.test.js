const Intern = require('../lib/intern');

// Tests the entirety of the intern class
describe("Intern class", () => {

    // Tests the creation of a new intern object
    describe("Create new intern object", () => {
        it("Should create a new intern object", () => {
            const intern = new Intern("Phil", 345, "phil@test.com", "Stephen F. Austin State University");

            expect(intern.name).toBe("Phil");
            expect(intern.id).toEqual(expect.any(Number));
            expect(intern.email).toEqual(expect.any(String));
            expect(intern.school).toEqual(expect.any(String));
        });
    });

    // Tests the getSchool method
    describe("getSchool method", () => {
        it("Should return the object.school value", () => {
            const intern = new Intern("Phil", 345, "phil@test.com", "Stephen F. Austin State University");

            expect(intern.getSchool()).toEqual(expect.any(String));
        });
    });

    // Tests the getRole method
    describe("getRole method", () => {
        it("Should return the Intern's role of Intern", () => {
            const intern = new Intern("Phil", 345, "phil@test.com", "Stephen F. Austin State University");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});