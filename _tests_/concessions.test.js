const {
  getConcessionByID,
  calculateTotalFromIDs,
} = require("../src/concessions.js");

const concessionsData = require("../data/concessions");

describe("getConcessionByID", () => {
  it("", () => {
expect(getConcessionByID(concessionsData, "g9sZdG1hI")).toStrictEqual({ id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 })

  });
});
