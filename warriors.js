// function NBAPLayer(stats) {
//   this.name = stats[name];
//   this.fgp = stats[fgp];
//   this.tpp = stats[tpp];
//   this.ftp = stats[ftp];
//   this.reb = stats[reb];
//   this.ast = stats[ast];
//   this.pts = stats[pts];
// }
rushStats = {
  fgp: "45.0",
  tpp: "33.3",
  ftp: "50.0",
  reb: "1.6",
  ast: "0.2",
  pts: "1.6"
}

speightsStats = {
  fgp: "39.0",
  tpp: "41.9",
  ftp: "77.4",
  reb: "2.0",
  ast: "0.5",
  pts: "5.6"
}

iguodalaStats = {
  fgp: "47.6",
  tpp: "38.5",
  ftp: "56.1",
  reb: "4.4",
  ast: "3.8",
  pts: "8.9"
}

thompsonStats = {
  fgp: "44.4",
  tpp: "42.2",
  ftp: "85.4",
  reb: "3.7",
  ast: "2.3",
  pts: "24.3"
}

varejaoStats = {
  fgp: "35.7",
  tpp: "0.00",
  ftp: "52.6",
  reb: "1.2",
  ast: "0.8",
  pts: "1.2"
}

barbosaStats = {
  fgp: "58.0",
  tpp: "39.3",
  ftp: "76.2",
  reb: "1.2",
  ast: "0.7",
  pts: "5.6"
}
mcadooStats = {
  fgp: "50.0",
  tpp: "0.00",
  ftp: "25.0",
  reb: "1.0",
  ast: "0.3",
  pts: "0.6"
}
clarkStats = {
  fgp: "49.1",
  tpp: "33.3",
  ftp: "80.0",
  reb: "1.1",
  ast: "1.0",
  pts: "4.1"
}

bogutStats = {
  fgp: "62.3",
  tpp: "0.00",
  ftp: "35.7",
  reb: "5.7",
  ast: "1.4",
  pts: "4.6"
}

curryStats = {
  fgp: "43.8",
  tpp: "40.4",
  ftp: "91.6",
  reb: "5.5",
  ast: "5.2",
  pts: "25.1"
}
ezeliStats = {
  fgp: "53.6",
  tpp: "0.00",
  ftp: "43.2",
  reb: "2.7",
  ast: "0.3",
  pts: "4.0"
}
livingstonStats = {
  fgp: "48.8",
  tpp: "0.00",
  ftp: "86.5",
  reb: "3.2",
  ast: "3.3",
  pts: "8.2"
}

barnesStats = {
  fgp: "38.5",
  tpp: "34.2",
  ftp: "76.5",
  reb: "4.7",
  ast: "1.3",
  pts: "9.0"
}

greenStats = {
  fgp: "43.1",
  tpp: "36.5",
  ftp: "73.8",
  reb: "9.9",
  ast: "6.0",
  pts: "15.4"
}



stats = {
  "Andrew Bogut": bogutStats,
  "Harrison Barnes": barnesStats,
  "Draymond Green": greenStats,
  "Stephen Curry": curryStats,
  "Anderson Varejao": varejaoStats,
  "Leandro Barbosa": barbosaStats,
  "Klay Thompson": thompsonStats,
  "Marreese Speights": speightsStats,
  "Shaun Livingston": livingstonStats,
  "Festus Ezeli": ezeliStats,
  "Ian Clark": clarkStats,
  "James Michael McAdoo": mcadooStats,
  "Brandon Rush": rushStats,
  "Andre Iguodala": iguodalaStats

}
fullStats = {
  fgp: "FG%",
  tpp: "TP%",
  ftp: "FT%",
  reb: "Rebounds",
  ast: "Assists",
  pts: "Points"
}


module.exports.names = stats;
module.exports.fullStats = fullStats;
