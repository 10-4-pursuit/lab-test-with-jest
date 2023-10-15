const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets")

describe('this will test getTicketByName', () => {
    const tickets = [
      { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 },
      { id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 },
      { id: "FSxeEmcoJ", name: "Child Matinee", priceInCents: 669 },
      { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 },
      { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 },
      { id: "B8v5R2nVQ", name: "Child Regular", priceInCents: 1069 },
    ];

    test('should return `null` if the tickets array is empty', () => {
        const tickets = [];
        const name = 'Adult';
        const ticket = getTicketByName(tickets, name);
    
        expect(ticket).toBe(null);
      });

    test('return `null` when no object is found with the given name', () => {
        const ticket = getTicketByName(tickets, 'Non-existent Ticket');
        expect(ticket).toBe(null);
    });

    test('return the ticket object when given a vaild name', () => {
        const ticket = getTicketByName(tickets, 'Adult Matinee')
        expect(ticket).toEqual({ id: '6ha0u__54', name: 'Adult Matinee', priceInCents: 949})
    });

    test('is case sensitive when matching names', () => {
        const ticket = getTicketByName(tickets, 'adULT matinee')
        expect(ticket).toEqual({ id: '6ha0u__54', name: 'Adult Matinee', priceInCents: 949 })
    });
});

describe('this will test calculateTotalFromTicketNames', () => {
  const tickets = [
    { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 },
    { id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 },
    { id: "FSxeEmcoJ", name: "Child Matinee", priceInCents: 669 },
    { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 },
    { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 },
    { id: "B8v5R2nVQ", name: "Child Regular", priceInCents: 1069 },
  ];

  test('should return correct total value for the given ticket names', () => {
    const names = ['Adult Matinee', 'Senior Matinee', 'Child Matinee', 'Adult Regular', 'Senior Regular', 'Child Regular']
    const total = calculateTotalFromTicketNames(tickets, names)
    expect(total).toEqual(6114)
  });

  test('should return 0 if no ticket names are found', () => {
    const names = ['Non-existent Ticket 1', 'Non-existent Ticket 2'];
    const total = calculateTotalFromTicketNames(tickets, names);
    expect(total).toEqual(0);
  });

  test('should return 0 if the tickets array is empty', () => {
    const names = ['Adult Regular', 'Child Regular'];
    const tickets = [];
    const total = calculateTotalFromTicketNames(tickets, names);
    expect(total).toEqual(0);
  });
});

