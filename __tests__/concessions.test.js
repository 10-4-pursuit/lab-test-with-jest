const {getConcessionByID, calculateTotalFromIDs,} = require("../src/concessions");
const concessions = require("../data/concessions");

// getConcessionByID()
describe('getConcessionByID', () => {
  it('should return the correct concession object when a valid ID is provided', () => {
    const actual = getConcessionByID(concessions, 'KzWBehRAD');
    expect(actual).toEqual({
      id: 'KzWBehRAD',
      name: 'Small Soda',
      priceInCents: 699,
    });
  });

  it('should return null when an invalid ID is provided', () => {
    const actual = getConcessionByID(concessions, 'invalidID');
    expect(actual).toBeNull();
  });
});

// calculateTotalFromIDs()
describe('calculateTotalFromIDs', () => {
  it('should return the total value of all concessions from the `ids` array', () => {
    const ids = [
      "g9sZdG1hI",
      "0Qs9Yp2NL",
      "KzWBehRAD",
      "NEHAsbTYk",
      "rNVCeVsri",
    ];
    const expected = 3975;

    const actual = calculateTotalFromIDs(concessions, ids);
    expect(actual).toEqual(expected);
  });

  it('should returns 0 if `ids` array is empty', () => {
    const ids = [];
    const expected = 0;
    const actual = calculateTotalFromIDs(concessions, ids);
    expect(actual).toEqual(expected);
  });
});
  