//  Nico McCarten
// 	2/6/20
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadStats();
  createPlayerSelectionList();


}

function draw() {
  getSelectedPlayers();
  loadPlayerStats(chosenPlayers);
}

function createPlayerSelectionList() {
  playerSel = createSelect(true);
  playerSel.position((windowWidth-width)/2, (windowHeight-height)/2); // locate at 270,40 in canvas coordinates
  playerSel.size(150, 100);
  for(var i = 0; i < players.length; i++){
    playerSel.option(players[i]);
  }
}

// abstract the UI control away, put the chosen player(s) in the array chosenPlayers
function getSelectedPlayers() {
  chosenPlayers = [];
  for (var i = 0; i<playerSel.elt.selectedOptions.length; i++) {
    chosenPlayers.push(playerSel.elt.selectedOptions[i].value);
  }
}

// find the stats for the chosen player in the stats table. result is an array of table rows, one for each year the player was in the league
function loadPlayerStats(player) {
  // column 2 has the player's name in the stats table
  statsArray = stats.findRows(player, 2); if (statsArray.length === 0) {
    // try adding an '*'
    statsArray = stats.findRows(player+"*", 2);
  }
}
