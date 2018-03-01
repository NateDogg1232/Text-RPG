//Text based RPG (Based on the Eyes of the Lich Queen story for Dungeons and Dragons)

//This JS is written to be completely independent from HTML for ease of porting.


//Make a character object (Will be used to derive all other objects)
function Character() {
    this.currentHP = 0;
    this.maxHP = 0;
    this.armor = 0;
    //This will take a character object
    this.currentTarget = undefined;
    this.inventory = new Array(0);
}

//An object to store the player itself
function Player() {
    this.char = new Character();
    this.name = "";
    this.currentLocation = new Location();
    this.actions = new Array(0);
}

function Enemy() {
    this.char = new Character();
    this.name = "";
    this.actions = [];
}

//Object to store a location's information
function Location() {
    this.name = "";
    this.size = new Array(2);
    //This will be a matrix of tile objects
    this.map = new Array(0);
    this.curx = 0;
    this.cury = 0;
}
//We use this to comprise the map
function Tile() {
    this.information = "";
    //Function to call
    this.action = null;
}



//============================================
//              INIT THE CHARACTER
//============================================
var mainPlayer = null;

function startPlayer(name) {
    mainPlayer = new Player();
    mainPlayer.char.currentHP = 10;
    mainPlayer.char.maxHP = 10;

    mainPlayer.char.armor = 0;
    //We will update this once we start making maps
    mainPlayer.location = "undefined";
}


function getPlayerHP() {
    return mainPlayer.char.currentHP;
}

function getPlayerMaxHP() {
    return mainPlayer.char.maxHP;
}

//We do a player action. action is a string
function doPlayerAction(fullAction) {
    var action = fullAction.split(" ");
    switch (action[0]) {
        //Wow. Can't believe this is our first easter egg. This is a disgrace
        case "owo":
        case "uwu":
        case "vwv":
            gameOutputClear();
            gameOutput("What's this?");
            break;
        case "go":
        case "move":
        case "walk":
        case "step":
            if (action.length == 1) {
                gameOutputClear();
                gameOutput("Go where?");
                break;
            }
            switch (action[1]) {
                case "west":
                    mainPlayer.actions.push(fullAction);
                    break;
                case "east":
                    mainPlayer.actions.push(fullAction);
                    break;
                case "north":
                    mainPlayer.actions.push(fullAction);
                    break;
                case "south":
                    mainPlayer.actions.push(fullAction);
                    break;
            }
            break;
        case "usethistotest":
            gameOutputClear();
            gameOutput("This is a test\nOf Breaks");
            break;
        case "urmomgay":
            gameOutputClear();
            gameOutput("no u");
            break;
        default:
            gameOutputClear();
            gameOutput("I don't recognize that action, sorry.");
            break;
    }
}

var gameOutput = null;

function setOutputFunction(func) {
    gameOutput = func;
}

var gameOutputClear = null;

function setOutputClearFunction(func) {
    gameOutputClear = func;
}
