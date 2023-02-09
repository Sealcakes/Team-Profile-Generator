const Employee = require('../lib/employee');

// Tests the entirety of the Employee Class
describe("Employee class", () => {
    // Tests the Creation of an Employee Object
    describe("Create new employee object", () => {
        it("Should create a new employee object", () => {
            const employee = new Employee("Frank", 123, "frank@test.com");

            expect(employee.name).toBe("Frank");
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    });

    // Tests the getName method
    describe("getName method", () => {
        it("When called should return the object.name value", () => {
            const employee = new Employee("Frank", 123, "frank@test.com");

            expect(employee.getName()).toEqual("Frank");
        });
    });

    // Tests the getId method
    describe("getId method", () => {
        it("When called should return the object.id value", () => {
            const employee = new Employee("Frank", 123, "frank@test.com");

            expect(employee.getId()).toEqual(123);
        });
    });

    // Tests the getEmail method
    describe("getEmail method", () => {
        it("When called should return the object.email value", () => {
            const employee = new Employee("Frank", 123, "frank@test.com");

            expect(employee.getEmail()).toEqual(expect.stringContaining("frank@test.com"));
        });
    });

    // Tests the getRole method
    describe("getRole method", () => {
        it("When called should return the getRole value of Employee", () => {
            const employee = new Employee("Frank", 123, "frank@test.com");

            expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
        });
    });
});