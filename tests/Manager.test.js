const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const M = new Manager("Foo", 1, "test@test.com", testValue);
    expect(M.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const M = new Manager("Foo", 1, "test@test.com", 100);
    expect(M.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const M = new Manager("Foo", 1, "test@test.com", testValue);
    expect(M.getOfficeNumber()).toBe(testValue);
});