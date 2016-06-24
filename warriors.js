// function NBAPLayer(stats) {
//   this.name = stats[name];
//   this.fgp = stats[fgp];
//   this.tpp = stats[tpp];
//   this.ftp = stats[ftp];
//   this.reb = stats[reb];
//   this.ast = stats[ast];
//   this.pts = stats[pts];
// }

bogutStats = {
  name: "Andrew Bogut",
  fpg: "62.3",
  tpp: "0.00",
  ftp: "35.7",
  reb: "5.7",
  ast: "1.4",
  pts: "4.6"
}

barnesStats = {
  name: "Harrison Barnes",
  fpg: "38.5",
  tpp: "34.2",
  ftp: "76.5",
  reb: "4.7",
  ast: "1.3",
  pts: "9.0"
}

greenStats = {
  name: "Draymond Green",
  fpg: "43.1",
  tpp: "36.5",
  ftp: "73.8",
  reb: "9.9",
  ast: "6.0",
  pts: "15.4"
}

stats = {
  "Andrew Bogut": bogutStats,
  "Harrison Barnes": barnesStats,
  "Draymond Green": greenStats
}
module.exports.names = stats;
// module.exports.bogutStats = bogutStats;
// module.exports.barnesStats = barnesStats;
// module.exports.greenStats = greenStats;
