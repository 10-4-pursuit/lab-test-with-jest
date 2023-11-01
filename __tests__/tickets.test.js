const { calculateTotalFromTicketNames } = require('../src/tickets');

const { getTicketByName } = require('../src/tickets');

describe('getTicketByName', () => {
 const tickets = [
    { id: '1', name: 'Cone', priceInCents: 250 },
    { id: '2', name: 'Sundae', priceInCents: 300 },
 ];

 test('returns a ticket object by its name', () => {
    const result = getTicketByName(tickets, 'Cone');
    expect(result).toEqual({ id: '1', name: 'Cone', priceInCents: 250 });
 });

 test('returns null if no ticket is found', () => {
    const result = getTicketByName(tickets, 'Popcorn');
    expect(result).toBeNull();
 });
});

describe('calculateTotalFromTicketNames', () => {
 const tickets = [
    { id: '1', name: 'Cone', priceInCents: 250 },
    { id: '2', name: 'Sundae', priceInCents: 300 },
 ];

 test('calculates the total value of all tickets from the given names array', () => {
    const result = calculateTotalFromTicketNames(tickets, ['Cone', 'Sundae']);
    expect(result).toBe(550);
 });

 test('returns 0 if no tickets are found', () => {
    const result = calculateTotalFromTicketNames(tickets, ['Popcorn']);
    expect(result).toBe(0);
 });
});
