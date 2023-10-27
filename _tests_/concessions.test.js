const {
  getConcessionByID,
  calculateTotalFromIDs,
} = require("../src/concessions.js");

const concessionsData = require("../data/concessions");

describe("getConcessionByID", () => {
  //Test that the function returns a concession object with a matching ID
  test("test that the function returns a concession object with a matching ID", () => {
    expect(getConcessionByID(concessionsData, "g9sZdG1hI")).toStrictEqual({
      id: "g9sZdG1hI",
      name: "Small Popcorn",
      priceInCents: 929,
    });
  });
  //Test that the function returns null if there is noconcession object with a matching ID
  test("test that the function returns null if there is noconcession object with a matching ID ", () => {
    expect(getConcessionByID(concessionsData, "g9sZdG1Xs")).toStrictEqual(null);
  });
});

describe("calculateTotalFromIDs", () => {
  //Tests that the function returns The total value of all concessions from the `ids` array
  it("tests that the function returns The total value of all concessions from the `ids` array", () => {
    const input = ["g9sZdG1hI", "0Qs9Yp2NL"];
    const actual = 1958
    expect(calculateTotalFromIDs(concessionsData, input)).toBe(actual)
  });

  //Tests that the function returns "0" if the array is empty
  it("tests that the function returns 0 if the array is empty", () => {
    const input = [];
    const actual = 0;       
    expect(calculateTotalFromIDs(concessionsData, input)).toBe(actual)
  })
});
