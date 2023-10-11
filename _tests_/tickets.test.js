const {
	getTicketByName,
	calculateTotalFromTicketNames
} = require('../src/tickets');
const ticketsData = require('../data/tickets');

test('should return a ticket by name', () => {
	const result = getTicketByName(ticketsData, 'Adult Regular');
	const expectedTicket = {id: 'uD_PoicNN', name: 'Adult Regular', priceInCents: 1369};
	expect(result).toEqual(expectedTicket);
  });
  

	test('should return null for a non-existent name', () => {
		const result = getTicketByName(ticketsData, 'Non-Existent Ticket');
		expect(result).toBeNull();
	});

describe('calculateTotalFromTicketNames', () =>{
	test('should calculate the total from an array of ticket names', () => {
		const ticketNames = ['Adult Matinee', 'Child Regular'];
		const result = calculateTotalFromTicketNames(ticketsData, ticketNames);
		const expectedTotal = 949 + 1069;
		expect(result).toBe(expectedTotal);
	});
	test('should handle non-existent ticket names', () => {
		const ticketNames = ['Non-Existent Ticket'];
		const result = calculateTotalFromTicketNames(ticketsData, ticketNames);
		expect(result).toBe(0);
	});
})
