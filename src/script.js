var saoPaulo = {
  nome: "SÃO PAULO",
  defeat: 0,
  tie: 0,
  victory: 0
};

var palmeiras = {
  nome: "PALMEIRAS",
  defeat: 0,
  tie: 0,
  victory: 0
};

var flamengo = {
  nome: "FLAMENGO",
  defeat: 0,
  tie: 0,
  victory: 0
};

var corinthians = {
  nome: "CORINTHIANS",
  defeat: 0,
  tie: 0,
  victory: 0
};

var santos = {
  nome: "SANTOS",
  defeat: 0,
  tie: 0,
  victory: 0
};

var teams = [saoPaulo, palmeiras, flamengo, corinthians, santos];

function calculatePoints(time) {
  var points = time.victory * 3 + time.tie;

  return points;
}

saoPaulo.points = calculatePoints(saoPaulo);
palmeiras.points = calculatePoints(palmeiras);
flamengo.points = calculatePoints(flamengo);
corinthians.points = calculatePoints(corinthians);
santos.points = calculatePoints(santos);

function displayTeams(teams) {
  var html = "";
  for (var i = 0; i < teams.length; i++) {
    html += `<tr style="font-weight: bold; font-size: 20px"> <td>${teams[i].nome}</td>`;
    html += `<td>${teams[i].victory}</td>`;
    html += `<td>${teams[i].tie}</td>`;
    html += `<td>${teams[i].defeat}</td>`;
    html += `<td>${teams[i].points}</td>`;
    html += `<td class="btn-primary btn-sm"> <button onClick="addVictory(${[
      i
    ]})">Vitória</button>`;
    html += `<td class="btn-primary btn-sm"> <button onClick="addTie(${[
      i
    ]})">Empate</button>`;
    html += `<td class="btn-primary btn-sm"> <button onClick="addDefeat(${[
      i
    ]})">Derrota</button></tr>`;
  }

  var tablePlayers = document.getElementById("table-players");

  tablePlayers.innerHTML = html;
}

displayTeams(teams);

function addVictory(index) {
  let team = teams[index];
  team.victory++;
  team.points = calculatePoints(team);

  displayTeams(teams);
}

function addTie(index) {
  let team = teams[index];
  team.tie++;
  team.points = calculatePoints(team);

  displayTeams(teams);
}

function addDefeat(index) {
  let team = teams[index];
  team.defeat++;

  displayTeams(teams);
}
