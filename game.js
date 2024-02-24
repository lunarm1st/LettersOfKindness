var gameData = {
    letters: 0,
    lettersPerClick: 1,
    lettersPerClickCost: 10,
    update: 0
}

function writeLetter() {
    gameData.letters += gameData.lettersPerClick

    document.getElementById("lettersWritten").innerHTML = gameData.letters
}

function buyLettersPerClick() {
    if (gameData.letters >= gameData.lettersPerClickCost) {
        gameData.letters -= gameData.lettersPerClickCost
        gameData.lettersPerClick += 1
        gameData.lettersPerClickCost *= 2
        document.getElementById("lettersWritten").innerHTML = gameData.letters + " letters written"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pen (Currently Level " + gameData.lettersPerClick + ") Cost: " + gameData.lettersPerClickCost + " letters"
    }
}

var mainGameLoop = window.setInterval(function() {
    writeLetter()
  }, 1000)

  var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("lettersOfKindnessSave", JSON.stringify(gameData))
  }, 15000)

  var savegame = JSON.parse(localStorage.getItem("lettersOfKindnessSave"))
if (savegame !== null) {
  gameData = savegame
}