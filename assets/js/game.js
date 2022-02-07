// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

/*console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
*/

// if the enemy-robot's health is zero or less, exit from the fight loop.
// fight function
var fight = function(enemyName) {
  // Alert players that they are starting the round

  window.alert("Welcome to Robot Gladiators!");

  while(playerHealth > 0 && enemyHealth > 0) {
      
  
  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // if player choses to fight, fight
  if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
    if (confirmSkip) {
      window.alert(playerName + "has decided to skip this fight.");
      playerMoney = playerMoney - 10;
      console.log("playerMoney" , playerMoney)
      break;
    }
  }  
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        
      window.alert(enemyNames[i] + " has died!");

      //award player money for winning
      playerMoney = playerMoney + 20;
      // leave while loop, enemy is dead.
      break;
    } 
    else {
      window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
}; 
    // if no (false), ask question again by running fight() again
    
// run fight function to start game
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    // call fight function with enemy-robot.
    fight(pickedEnemyName[i]);    
}
