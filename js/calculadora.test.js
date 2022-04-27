import { calculaDelta, calculaBhaskara } from "./calculadora";

it("Delta de a=7, b=3, c=4", () => {
  expect(calculaDelta(7, 3, 4)).toBe(-103);
});

it("Delta de a=4, b=-4, c=1", () => {
  expect(calculaDelta(4, -4, 1)).toBe(0);
});

it("Delta de a=2, b=8, c=-24", () => {
  expect(calculaDelta(2, 8, -24)).toBe(256);
});

it("Bhaskara de a=2, b=8, c=-24", () => {
  expect(calculaBhaskara(2, 8, 256)).toEqual({ x1: 2, x2: -6 });
});
