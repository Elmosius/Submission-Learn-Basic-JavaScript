import { sum } from "./index.js";
import { test } from "node:test";
import assert from "node:assert";

test("sum function", () => {
  assert.strictEqual(sum(1, 2), 3, "1 + 2 = 3");
  assert.strictEqual(sum(-1, -1), -2, "-1 + -1 = -2");
  assert.strictEqual(sum(0, 0), 0, "0 + 0 = 0");
  assert.strictEqual(sum(2.5, 2.5), 5, "2.5 + 2.5 = 5");
});
