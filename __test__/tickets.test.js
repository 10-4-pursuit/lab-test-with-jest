const { getTicketByName, calculateTotalFromTicketNames } = require('../src/tickets.js');
const tickets = require('../data/tickets.js');

describe('getTicketByName', () => {
  test('returns a valid ticket by name', () => {
    const result = getTicketByName(tickets, 'Adult Matinee');
    const expected = { id: '6ha0u__54', name: 'Adult Matinee', priceInCents: 949 };
    expect(result).toEqual(expected); 
  });

  test('returns null for an invalid name', () => {
    const result = getTicketByName(tickets, 'Invalid Ticket');
    expect(result).toBeNull();
  });
});

describe('calculateTotalFromTicketNames', () => {
  test('should calculate the total price based on valid ticket names', () => {
    const result = calculateTotalFromTicketNames(tickets, ['Adult Matinee', 'Child Regular']);
    expect(result).toBe(949 + 1069);
  });
  test('should return 0 for an empty list of names', () => {
    const result = calculateTotalFromTicketNames(tickets, []);
    expect(result).toBe(0);
  });
});
