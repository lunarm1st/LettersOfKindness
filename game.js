let letters = 0;
var lettersPerClick = 0.1; //this increases letter amount created when clicked
var penQualityCost = 10; //this is how much the upgrade costs
var paperQuality = 0;
var paperQualityCost = 50;

function lettersRounded(x) {
    return Number.parseFloat(x).toFixed(2);
}

function update() {
    document.getElementById("lettersWritten").innerHTML = lettersRounded(letters)
    document.getElementById("penQuality").innerHTML = lettersRounded(lettersPerClick)
    document.getElementById("penQualityCost").innerHTML = lettersRounded(penQualityCost)
    document.getElementById("paperQuality").innerHTML = lettersRounded(paperQuality)
    document.getElementById("paperQualityCost").innerHTML = lettersRounded(paperQualityCost)
}

function writeLetter() {
    letters += lettersPerClick
    update()
}

function buyPenQuality() {
    if (letters >= penQualityCost) {
        letters -= penQualityCost
        lettersPerClick += 0.1
        penQualityCost *= 1.5
        update()
    }
}

function buyPaperQuality() {
    if (letters >= paperQualityCost) {
        letters -= paperQualityCost
        paperQuality += 1
        paperQualityCost *= 2
        update()
    } 
}

function runPaperQuality() {
    letters += (paperQuality / 10)
}

setInterval(function() {
    runPaperQuality()
    update()
    }, 1000)

