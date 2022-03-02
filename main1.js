const prompt = require("prompt-sync")();
console.log("*********************************************************************************************************************************************");
console.log("******************************************** Welcome to your fishing trip!!******************************************************************")
console.log("_______________________________________________________________________________________");
console.log("                                                                                      |******************************************************");
console.log("FFFFFFFFFF    II          SSSSS    hh          II    nnnn nnnnnnn        gggggg       |***************|**************************************");
console.log("FFFFFFFFFF    II       SSS         hh          II       nn       nn    ggg     gg     |******************************************************");
console.log("FFF           II      SSS          hh          II      nn         nn   ggg      g     |******************************************************");
console.log("FFFFFFFFFF    II         SSS       hh          II      nn         nn  gggg      g     |******************************************************");
console.log("FFFFFFFFFF    II          SS       hhhhhhh     II      nn         nn    ggggggggg     |******************************************************");
console.log("FFF           II           SSS     hh   hh     II      nn         nn            g     |******************************************************");
console.log("FFF           II          SSS      hh   hh     II      nn         nn           gg     |******************************************************");
console.log("FFF           II     SSSSSS        hh   hh     II      nn         nn    gggggggg      |******************************************************");
console.log("                                                                                      |******************************************************");
console.log("______________________________________________________________________________________|******************************************************");
console.log("                                                                                       ");
console.log("*********************************************************************************************************************************************");
console.log("********************************************* What time of day do you wish to leave**********************************************************");
console.log("                                                                                                                                             ");
console.log("                                                                                                                                             ");
console.log("Enter the on the hour you wish to start ex 6 or 7 or 5> ");
let startTime = prompt(Number(""));
let nameFirst = "";
let startDateTime = new Date();
//console.log(startDateTime);
let startTimeAM = prompt("Do you wish to start in the AM or PM please type as written >");

console.log(" ");
nameFirst = prompt("What is your name:> ");
console.log(" ");
console.log("____________________________________________________________________________________________________________________________________________________");
console.log(" ");
console.log("******************" + nameFirst + " is going on a fishing trip starting at:" + startTime + startTimeAM + "************************************************");
console.log(" ");
console.log("____________________________________________________________________________________________________________________________________________________");
if (startTimeAM == "PM") {
    startTime += 12;
}

console.log("Your fishing trip is for 6 hours starting from your first cast");
console.log("****************************************************************************************************************************************************");
console.log(" ");
console.log("There are many types of fish all with diffrent weights and values");
console.log("****************************************************************************************************************************************************");
console.log(" ");
console.log("Ever hear of jesus and the temple tax, well you could be just as lucky ;)");
console.log(" ");
console.log("****************************************************************************************************************************************************");
console.log(" ");
console.log("Be wary though this lake is filled with boots and you might catch one :(");
console.log(" ");
console.log("****************************************************************************************************************************************************");
console.log("Press [1] if you would like to get started fishing");
console.log("Press [2] in the future if you would like to view your catch");
console.log("Press [3] in the future if you would like to chumb your water");
console.log("Press [4] if you want to end your trip early");
console.log("***************PRESS ENTER & FISH*****************************");

let clock = 0;
//Math.ceil(Math.random()) * 6;
console.log(clock);

let probFish = Math.random() * Math.random() * 3;
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
let blueFinTuna = "BlueFinTuna";
var totalPounds = 0;
var sumValue = 0;
let fishList = [];
const fishNames = ['Blue Fin', 'Red Fin', 'Golden Doubloon', 'SailFin', 'BigMouth', 'Shark', 'Bluegilled', 'RedBass', 'Ugly', 'Ten'];
const len = fishNames.length;
start();

function start() {
    const tick = parseInt(15 + Math.random() * 75);
    console.log("tick: ", tick);
    let more = 'Y';
    do {
        /*
        let currentDateTime = new Date();
        var timeDiff = currentDateTime - startDateTime; //in ms
        const hours = timeDiff / (1000 * 60 * 60);
        */
        if (clock > 600) {
            console.log("Time up!");
            return;
        }

        createFish();
        clock += tick;
        console.log("Total Weight: ", totalPounds.toFixed(2), "Sum Value: ", sumValue.toFixed(2));
        more = prompt("More Fish ? Y or N");
        if (more == 'T') {
            releaseFish();
            more = prompt("More Fish ? Y or N");
        }
    } while (more == 'Y');
    displaySum();
}

function createFish() {

    let weight = Math.random() * 18;
    if (totalPounds + weight > 50) {
        console.log("You have reached your daily limit");
        return;
    }
    let idx = parseInt(Math.random() * len);
    if (idx == 2) // golden doubloon
    {
        console.log("golden doubloon");
    }
    let value = Math.random() * 30;
    sumValue += value;
    totalPounds += weight;
    const fish = { name: fishNames[idx], weight: weight, value: value };
    //  console.log(fish);
    fishList.push(fish);
    return fish;
}

function displaySum() {

    console.log("Total Weight: ", totalPounds.toFixed(2), "Sum Value: ", sumValue.toFixed(2));

    fishList.forEach((fish, idx) => {
        console.log(idx + 1, fish.name, fish.weight.toFixed(2), fish.value.toFixed(2));
    });
}

function releaseFish() {
    displaySum();

    let idx = parseInt(prompt("Enter number to remove:"));
    --idx;
    const fish = fishList[idx];
    fishList.splice(idx, 1);
    totalPounds -= fish.weight;
    sumValue -= fish.value;
    displaySum();
}