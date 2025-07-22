const msftData = [
  [190.15, 196.21, 191.07, 194.44],
  [193.61, 195.89, 190.12, 193.4],
];

// Write your code below
function averageClosingPrice(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i][3];
  }
  return sum / data.length;
}

const avgClose = averageClosingPrice(msftData);

console.log("Average closing price of MSFT is " + avgClose.toFixed(2));
