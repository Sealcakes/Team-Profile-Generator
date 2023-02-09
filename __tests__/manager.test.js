const Manager = require('../lib/manager');

// Tests the entirety of the manager class
describe("Manager class", () => {

    // Tests the creation of a new manager object
    describe("Create a new manager object", () => {
        it("Should create a new manager object", () => {
            const manager = new Manager("Sam", 456, "sam@test.com", 2305);

            expect(manager.name).toBe("Sam");
            expect(manager.id).toEqual(expect.any(Number));
            expect(manager.email).toEqual(expect.any(String));
            expect(manager.officeNumber).toEqual(expect.any(Number));
        });
    });

    // Tests the getRole method
    describe("getRole method", () => {
        it("Should return the manager object's role of Manager", () => {
            const manager = new Manager("Sam", 456, "sam@test.com", 2305);

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});