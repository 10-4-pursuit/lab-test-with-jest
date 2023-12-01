const {
    getTicketByName,
    calculateTotalFromTicketNames,
  } = require("../src/tickets");
  
  describe("getTicketByName", () => {
    const tickets = [
      { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 },
      { id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 },
      { id: "FSxeEmcoJ", name: "Child Matinee", priceInCents: 669 },
      { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 },
      { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 },
      { id: "B8v5R2nVQ", name: "Child Regular", priceInCents: 1069 },
    ];
  
    test("getTicketByName returns the ticket object by name (case-insensitive)", () => {
      expect(getTicketByName(tickets, "Non-existent Ticket")).toBeNull();
    });
    test("returns null for non-existent name", () => {
        const result = getTicketByName(tickets, "Non-Existent Ticket");
    
        expect(result).toBeNull();
      });
    
      test("handles empty tickets array", () => {
        const result = getTicketByName([], "Adult Matinee");
    
        expect(result).toBeNull();
      });
    });
    describe("calculateTotalFromTicketNames", () => {
        const tickets = [
          { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 },
          { id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 },
          { id: "FSxeEmcoJ", name: "Child Matinee", priceInCents: 669 },
          { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 },
          { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 },
          { id: "B8v5R2nVQ", name: "Child Regular", priceInCents: 1069 },
        ];
      
        test("calculateTotalFromTicketNames calculates the total correctly", () => {
          const names1 = ["Adult Matinee", "Senior Matinee"];
          expect(calculateTotalFromTicketNames(tickets, names1)).toBe(1788); // 949 + 839 =
      
          const names2 = [];
          expect(calculateTotalFromTicketNames(tickets, names2)).toBe(0);
      
          const names3 = ["Deluxe Ticket", "Economy Ticket"];
          expect(calculateTotalFromTicketNames(tickets, names3)).toBe(0);
        });
      });