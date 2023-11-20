import { statement } from "../src/chapter1.js";

describe("Chapter 1", () => {
  const invoices = [
    {
      customer: "BigCo",
      performances: [
        {
          playID: "hamlet",
          audience: 55,
        },
        {
          playID: "as-like",
          audience: 35,
        },
        {
          playID: "othello",
          audience: 40,
        },
      ],
    },
    {
      customer: "LittleCo",
      performances: [
        {
          playID: "king-arthur",
          audience: 75,
        },
        {
          playID: "hamlet",
          audience: 51,
        },
      ],
    },
  ];

  const plays = {
    hamlet: { name: "Hamlet", type: "tragedy" },
    "as-like": { name: "As You Like It", type: "comedy" },
    othello: { name: "Othello", type: "tragedy" },
    "king-arthur": { name: "King Arthur", type: "adventure" },
  };

  it("should return right invoice", async () => {
    const result = await statement(invoices[0], plays);

    expect(result).toBe(
      "Statement for BigCo\n   Hamlet: $650.00 (55 seats)\n   As You Like It: $580.00 (35 seats)\n   Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n"
    );
  });

  it("should return unknown type error", async () => {
    expect(() => {
      statement(invoices[1], plays);
    }).toThrow("unknown type: adventure");
  });
});
