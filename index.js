const XO = (str) => {
  let counts = { x: 0, o: 0 };
  str
    .toLowerCase()
    .split('')
    .forEach((s) => {
      s === 'x' ? counts['x']++ : s === 'o' ? counts['o']++ : null;
    });
  return counts['x'] === counts['o'];
};
