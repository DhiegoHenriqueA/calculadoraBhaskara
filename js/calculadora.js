const calculaDelta = (a, b, c) => {
  return Math.pow(b, 2) - 4 * a * c;
};

const calculaBhaskara = (a, b, delta) => {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = null;

  if (delta > 0) {
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
  }

  return { x1: x1, x2: x2 };
};

export { calculaDelta, calculaBhaskara };
