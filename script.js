const team1 = document.getElementById("team1");
const team2 = document.getElementById("team2");
 
let team1_score = 0;
let team2_score = 0;
 
const writeTeamName = (team, team_name) => {
  team.querySelector("h3").innerHTML = team_name;
};
 
const writeScore = (team, score) => {
  team.querySelector("h4").innerHTML = score;
};

const increaseScore1 = () => {
    team1_score++;
    writeScore(team1, team1_score);
};
 
const decreaseScore1 = () => {
  if (team1_score <= 0) {
    return;
  }
  team1_score--;
  writeScore(team1, team1_score);
};

const increaseScore2 = () => {
    team2_score++;
    writeScore(team2, team2_score);
};
 
const decreaseScore2 = () => {
  if (team2_score <= 0) {
    return;
  }
  team2_score--;
  writeScore(team2, team2_score);
};
 
const directAssign1 = () => {
  const score = prompt("Skor girin: ");
  if (isNan(score) || +score < 0) {
    return alert("Sayı girin.");
  }
  writeScore(team1, score);
  team1_score = score;
};
 
const directAssign2 = () => {
  const score = prompt("Skor girin: ");
  if (isNan(score) || +score < 0) {
    return alert("Sayı girin.");
  }
  writeScore(team2, score);
  team2_score = score;
};
 
const changeName1 = () => {
  const name = prompt("İsim girin: ");
  writeTeamName(team1, name);
};
 
const changeName2 = () => {
  const name = prompt("İsim girin: ");
  writeTeamName(team2, name);
};
 
writeScore(team1, team1_score);
writeScore(team2, team2_score);