const tickets = require("../data/tickets");
const { getTicketByName } = require("../src/tickets");
const { calculateTotalFromTicketNames } = require("../src/tickets");

// getTicketByName()
describe("getTicketByName()", () => {
    test("Returns the ticket object with a matching ID", () => {
        const actual = getTicketByName(tickets, "Adult Matinee");
        const expected = { 
            id: "6ha0u__54", 
            name: "Adult Matinee", 
            priceInCents: 949 
        };
        expect(actual).toStrictEqual(expected);
    });
});

describe("getTicketByName()", () => {
    test("Returns null if no object is found", () => {
        const actual = getTicketByName(tickets, "blah");
        const expected = null;
        expect(actual).toStrictEqual(expected);
    });
});

// calculateTotalFromTicketNames()
describe("calculateTotalFromTicketNames()", () => {
    test("Returns the total value of all tickets from the `names` array", () => {
        const names = [
            "Adult Matinee",
            "Senior Matinee",
            "Child Matinee",
            "Adult Regular",
            "Senior Regular",
            "Child Regular"
        ];
        const actual = calculateTotalFromTicketNames(tickets, names);
        const expected = 6114;
        expect(actual).toBe(expected);
    });
});

describe("calculateTotalFromTicketNames()", () => {
    test("Returns 0 if the `names` array is empty", () => {
        const names = [];
        const actual = calculateTotalFromTicketNames(tickets, names);
        const expected = 0;
        expect(actual).toBe(expected);
    });
});