import { statement } from "./src/chapter1.js";

import plays from "./plays.json" with { "type": "json" }
import invoices from "./invoices.json" with { "type": "json" }

for (let invoice of invoices) {
  console.log(statement(invoice, plays));
}
