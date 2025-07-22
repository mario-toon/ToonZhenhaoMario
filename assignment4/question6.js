// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

const getLowestThree = (prices) =>
  prices
    .slice()
    .sort((a, b) => a - b)
    .slice(0, 3);

const lowestThree = getLowestThree(amdPrices);
console.log(
  "The three lowest prices are " +
    lowestThree[0] +
    ", " +
    lowestThree[1] +
    ", and " +
    lowestThree[2]
);
