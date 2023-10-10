const tickets = require("../data/tickets");
const {getTicketByName, calculateTotalFromTicketNames,} = require("../src/tickets");

// getTicketByName()
describe('getTicketByName', () => {
  it('should return the correct ticket object when a valid ID is provided', () => {
    const actual = getTicketByName(tickets, "Child Matinee");
    const expected = {
      id: "FSxeEmcoJ",
      name: "Child Matinee",
      priceInCents: 669
    };
    expect(actual).toStrictEqual(expected);
  });

  it('should return `null` if no object is found', () => {
    const actual = getTicketByName(tickets, "Non-Existent Ticket");
    expect(actual).toBeNull();
  });
});


// calculateTotalFromTicketName()
describe('calculateTotalFromTicketName', () => {
  it('should return the total value of all tickets in the `names` array', () => {
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
    expect(actual).toEqual(expected);
  });
  
  it('should returns 0 if `names` array is empty', () => {
    const names = [];
    const expected = 0;
    const actual = calculateTotalFromTicketNames(tickets, names);
    expect(actual).toEqual(expected);
  });
});