const { 
    getConcessionByID,
    calculateTotalFromIDs, 
 } = require("../src/concessions")

  
//Concessions - Test
//this test should return the entire concession object of the given id
describe("getConcessionByID()", () => { 
    it ("should return the entire concession object of the given id", () => {
        const input = [
            { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
            { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
            { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
            { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
            { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
          ];
        const actual = getConcessionByID(input, "0Qs9Yp2NL");
        const expected = { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 } ;
        expected(actual).toBe(expected)
    })

});
//this test should return null if no matching id exists
//this test should return an integer representing adding the 'priceInCents' of all products
//this test should return an error message if there if one of the products is missing an integer as value in 'priceInCents' 