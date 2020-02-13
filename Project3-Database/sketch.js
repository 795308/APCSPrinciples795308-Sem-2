//  Nico McCarten
// 	2/6/20
//  This is a comment
//  The setup function function is called once when your program begins
var statsArray = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadStats();
  createPlayerSelectionList();
  createStatSelectionList();


}

function draw() {
  background(5,5,5)
  getSelectedPlayers();
  getSelectedStat();
  for(var i = 0; i < chosenPlayers.length; i++){
    loadPlayerStats(chosenPlayers[i]);
  }
  aggregateStats(chosenStat[0]);
  getYears();
  stringConverter();
  getSmallest();
  getLargest();
  graph();
}

function createPlayerSelectionList() {
  playerSel = createSelect(true);
  playerSel.position((windowWidth-width)/2, (windowHeight-height)/2); // locate at 270,40 in canvas coordinates
  playerSel.size(150, 100);
  for(var i = 0; i < players.length; i++){
    playerSel.option(players[i]);
  }
}

function createStatSelectionList(){
  statSel = createSelect(true);
  statSel.position((windowWidth+width-300)/2, (windowHeight-height)/2);
  statSel.size(150, 100);
  for(var i = 3; i < statNames.length; i++){
    statSel.option(statNames[i]);
  }
}

// abstract the UI control away, put the chosen player(s) in the array chosenPlayers
function getSelectedPlayers() {
  chosenPlayers = [];
  for (var i = 0; i < playerSel.elt.selectedOptions.length; i++) {
    chosenPlayers.push(playerSel.elt.selectedOptions[i].value);
  }
}

function getSelectedStat(){
  chosenStat = [];
  for(var i = 0; i < statSel.elt.selectedOptions.length; i++){
    for(var j = 0; j < statNames.length ; j++){
      if(statSel.elt.selectedOptions[i].value === statNames[j]){
        chosenStat.push(j);
      }
    }
  }
}

// find the stats for the chosen player in the stats table. result is an array of table rows, one for each year the player was in the league
function loadPlayerStats(player) {
  // column 2 has the player's name in the stats table
  statsArray = stats.findRows(player, 2);
  if (statsArray.length === 0) {
    // try adding an '*'
    statsArray = stats.findRows(player+"*", 2);
  }
}

// collect stats into arrays for generic approach to graphing
function aggregateStats(stat){
  results = [];
  for(var i = 0; i<statsArray.length; i++) {
    results.push(statsArray[i].get(stat));
  }
}

function getYears(){
  years = [];
  for(var i = 0; i<statsArray.length; i++) {
    years.push(statsArray[i].get(1));
  }
}

function getSmallest(){
  smallest = results[0];
  for(var i = 0; i < results.length; i++){
    if (smallest > results[i]) {
      smallest = results[i];
    }
  }
}

function getLargest(){
  largest = results[0];
  for(var i = 0; i < results.length; i++){
    if (largest < results[i]) {
      largest = results[i];
    }
  }
}

function stringConverter(){
  for(var i = 0; i < results.length; i++){
    results[i] = parseInt(results[i], 10);
  }
}

function graph(){
  var x1, y1, x2, y2;
  for(var i = 0; i < results.length; i++){
    x1 = i*(width-100)/results.length + 50
    y1 = map(results[i], smallest, largest, 250, 750);
    x2 = (i+1)*(width-100)/results.length + 50
    y2 = map(results[i+1], smallest, largest, 250, 750);
    stroke(255, 255, 255);
    line(x1, y1, x2, y2);
    fill(0, 0, 255);
    ellipse(x1, y1, 5, 5);
    textSize(16)
    textAlign(CENTER, BOTTOM);
    text(years[i], x1, 800);
  }
}
