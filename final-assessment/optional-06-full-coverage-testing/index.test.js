import { test } from "node:test";
import sum from "./index.js";
import assert from "node:assert";

test("sum function", () => {
  // Test valid angka positif
  assert.strictEqual(sum(1, 2), 3, "1 + 2 = 3");
  assert.strictEqual(sum(2.5, 2.5), 5, "2.5 + 2.5 = 5");
  assert.strictEqual(sum(10, 20), 30, "10 + 20 = 30");

  // Test dengan nol
  assert.strictEqual(sum(0, 0), 0, "0 + 0 = 0");
  assert.strictEqual(sum(0, 5), 5, "0 + 5 = 5");
  assert.strictEqual(sum(5, 0), 5, "5 + 0 = 5");

  // Test jika ada angka negatif
  assert.strictEqual(sum(-1, 2), 0, "-1 + 2 return 0");
  assert.strictEqual(sum(1, -2), 0, "1 + -2 return 0");
  assert.strictEqual(sum(-1, -2), 0, "-1 + -2 return 0");

  // Test invalid untuk tipe data selain angka
  assert.strictEqual(sum("1", 2), 0, '"1" + 2 return 0');
  assert.strictEqual(sum(1, "2"), 0, '1 + "2" return 0');
  assert.strictEqual(sum("1", "2"), 0, '"1" + "2" return 0');
  assert.strictEqual(sum(null, 5), 0, "null + 5 return 0");
  assert.strictEqual(sum(4, undefined), 0, "4 + undefined return 0");
  assert.strictEqual(sum({}, []), 0, "{} + [] return 0");

  // Test tipe data lain
  assert.strictEqual(sum(true, 1), 0, "true + 1 return 0");
  assert.strictEqual(sum(false, 0), 0, "false + 0 return 0");
  assert.strictEqual(sum(NaN, 2), 0, "NaN + 2 return 0");
});
