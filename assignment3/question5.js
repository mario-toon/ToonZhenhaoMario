const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below
const bacDataLow = [bacData[0]];
const bacDataHigh = [bacData[1]];
const bacDataOpen = [bacData[2]];
const bacDataClose = [bacData[3]];
const bacDataVol = [bacData[4]];

if (bacDataClose > bacDataOpen) {
  if (bacDataVol > 100000) {
    console.log("Strong Bullish");
  } else {
    console.log("Bullish");
  }
} else if (bacDataClose < bacDataOpen) {
  if (bacDataVol > 10000) {
    console.log("Strong Bearish");
  } else {
    console.log("Bearish");
  }
} else if (bacDataClose === bacDataOpen) {
  console.log("Neutral");
}
// Expect Output = Strong Bullish
