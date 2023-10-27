const {
  getTicketByName,
  calculateTotalFromTicketNames,
} = require("../src/tickets");
const ticketData = require("../data/tickets");

describe("getTicketByName", () => {
  // this functions returns the ticket object with a matching ID
  test("this functions returns the ticket object with a matching ID", () => {
    expect(getTicketByName(ticketData, "Adult Matinee")).toStrictEqual({
      id: "6ha0u__54",
      name: "Adult Matinee",
      priceInCents: 949,
    });
  });

  // this function returns null if the ticket object does not match with matching ID
  test("this function returns null if the ticket object does not match with matching ID", () => {
    const input = "alf";
    const result = null;
    expect(getTicketByName(ticketData, input)).toStrictEqual(result);
  });
});

describe("calculateTotalFromTicketNames", () => {
    //this function returns the total value of all tickets from the 'names' array
  it("this function returns the total value of all tickets from the 'names' array", () => {
    const input= ['Adult Matinee', 'Senior Matinee'];
    const result= 1788;
    expect (calculateTotalFromTicketNames(ticketData, input)).toBe(result)
  });
  //this function returns 0 if the names array is empty
  it ("this function returns 0 if the names array is empty", () => {
    expect (calculateTotalFromTicketNames(ticketData, [])).toBe(0)
  })
});
