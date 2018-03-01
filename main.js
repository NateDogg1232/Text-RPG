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
function Player(c) {
    this.char = new Character();
    this.currentLocation = new Location();
    this.actions = new Array(0);
}

function Enemy() {
    this.char = new Character();
    this.name = "";
    this.actions = [];
}

//Object to store a location's information
function Location(name, sizex, sizey) {
    this.name = name;
    this.size = [sizex, sizey];
    //This will be a matrix of tile objects
    this.map = new Array(0);
}
//We use this to comprise the map
function Tile(information, action, checkAction) {
    this.information = information;
    //Function to call
    this.action = action;
    //Function to call when checking the tile
    this.checkAction = checkAction;
}

function Item(name, action, type) {
    this.name = name;
    this.action = action;
    this.type = type;
}

var output = {
    clear: null,
    print: null
};


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
            output.clear();
            output.print("What's this?");
            break;
        //Go
        case "go":
        case "move":
        case "walk":
        case "step":
            if (gameStatus == 1) {
                output.clear()
                output.print("Cannot move while in battle")
            }
            if (action.length == 1) {
                output.clear();
                output.print("Go where?");
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
        case "target":
            //Check what the player is trying to target
            break;
        case "enemies":
            break;
        case "inventory":
        case "bag":
            output.clear();
            for (let i = 0; i<player.char.inventory.length; i++) {
                output.print("[" + i.toString() + "] " + player.char.inventory[i].name + "(" + player.char.inventory[i].type + ")")
            }
            break;
            
        //We'll keep this in as an easter egg beacuse why not
        case "usethistotest":
            output.clear();
            output.print("This is a test\nOf Breaks");
            break;
        //This always needs to be by the default
        case "ur":
            if (action[1]=="mom") {
                if (action[2]=="gay") {
                    output.clear();
                    output.print("no u");
                    break;
                }
            }
        default:
            output.clear();
            output.print("I don't recognize that action, sorry.");
            break;
    }
}

//The current status of the game
//Values:
//  0 = Roaming (Allows movement)
//  1 = Battle (Allows attacking, disallows movement)
var gameStatus = 0

function setOutputFunction(func) {
    output.print = func;
}

function setOutputClearFunction(func) {
    output.clear = func;
}
