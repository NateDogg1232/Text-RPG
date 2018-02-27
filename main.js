//Text based RPG (Based on the Eyes of the Lich Queen story for Dungeons and Dragons)

//This JS is written to be completely independent from HTML for ease of porting.


//Make a character object (Will be used to derive all other objects)
function Character() {
    this.hp = 0;
    this.armor = 0;
    //This will take a character object
    this.target = undefined;

    this.inventory = new Array(0);
}

//An object to store the player itself
function Player() {
    this.char = Character();
    this.name = "";
    this.location = Location();
    this.actions = new Array(0);
}

//Object to store a location's information
function Location() {
    this.name = "";
    this.size = new Array(2);
    //This will be a matrix of tile objects
    this.map = new Array(0);
}
//We use this to comprise the map
function Tile() {
    this.name = "";
    //Function to call
    this.action = undefined;
}



//============================================
//              INIT THE CHARACTER
//============================================
mainPlayer = Player();
function startPlayer(name) {
    mainPlayer.char.hp = 10;
    mainPlayer.char.armor = 0;
    //We will update this once we start making maps
    mainPlayer.location = undefined;
    mainPlayer.lastAction.push(startPlayer);
}


function getPlayerHP() {
    return mainPlayer.char.hp;
}