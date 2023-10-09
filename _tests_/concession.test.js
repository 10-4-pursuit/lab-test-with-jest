const {
	getConcessionByID,
	calculateTotalFromIDs 
} = require('../src/concessions');
const concessionsData = require('../data/concessions');


describe('getConcessionByID', () => {
test('should return a concession by ID', () => {
	const results = getConcessionByID(concessionsData,'g9sZdG1hI');
	const expectedConcession = {id: 'g9sZdG1hI', name: 'Small Popcorn', priceInCents: 929};
	expect(results).toEqual(expectedConcession);
});
test('should return null for a non-existent ID', () => {
	const result = getConcessionByID(concessionsData, 'nonExistentID');
	expect(result).toBeNull();
  });
});

describe('calculateTotalFromIDs', () => {
	test('should calculate the total from an array of IDs', () => {
		const ids = ['g9sZdG1hI', 'KzWBehRAD', 'rNVCeVsri'];
		const result = calculateTotalFromIDs(concessionsData, ids);
		const expectedTotal = concessionsData
		.filter(concession => ids.includes(concession.id))
		.reduce((total, concession) => total + concession.priceInCents,0);
		expect(result).toBe(expectedTotal);
	});
	test('should handle non-existent IDs', () => {
		const ids = ['nonExistentID'];
		const result = calculateTotalFromIDs(concessionsData, ids);
		expect(result).toBe(0);
	});
	test('should handle an empty array of IDs', () => {
		const ids =[];
		const result = calculateTotalFromIDs(concessionsData, ids);
		expect(result).toBe(0);
	});
});