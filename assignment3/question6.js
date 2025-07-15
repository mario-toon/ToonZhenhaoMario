const disneyData = {
  open: "120.54",
  high: "122.56",
  low: "120.54",
  close: "121.09",
  volume: "90000",
};

// Write your code below
const disneyDataOpen = parseFloat(disneyData.open);
const disneyDataClose = parseFloat(disneyData.close);
const disneyDataVol = parseFloat(disneyData.volume);

if (disneyDataClose > disneyDataOpen) {
  if (disneyDataVol > 100000) {
    console.log("Strong Bullish");
  } else {
    console.log("Bullish");
  }
} else if (disneyDataClose < disneyDataOpen) {
  if (disneyDataVol > 10000) {
    console.log("Strong Bearish");
  } else {
    console.log("Bearish");
  }
} else if (disneyDataClose === disneyDataOpen) {
  console.log("Neutral");
}
// Expected Output = Bullish
