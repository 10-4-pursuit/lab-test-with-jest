const {getTicketByName, calculateTotalFromTicketNames,} = require("../src/tickets")

const ticketsData = require("../data/tickets");

describe("Returns a ticket object when given the name:", () => {
    it("can return ticket object with a matching ID.", () => {
        const actual = getTicketByName(ticketsData, "Adult Matinee");
        const expected = { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 };
        expect(actual).toStrictEqual(expected);
    })
    it("can return `null` if no object is found.", () => {
        const actual = getTicketByName(ticketsData, "code");
        const expected = null;
        expect(actual).toStrictEqual(expected);
    })
})

describe("Calculates a total based on the given ticket names.", () => {
    it("can return the total value of all tickets from the `names` array.", () => {
        const names = [
            "Adult Matinee",
            "Senior Matinee",
            "Child Matinee",
            "Adult Regular",
            "Senior Regular",
            "Child Regular"
        ];
        const actual = calculateTotalFromTicketNames(ticketsData, names);
        const expected = 6114;
        expect(actual).toStrictEqual(expected);
    })
    it("can return 0 if array is empty.", () => {
        const names = [];
        const actual = calculateTotalFromTicketNames(ticketsData, names);
        const expected = 0;
        expect(actual).toStrictEqual(expected);
    })
})