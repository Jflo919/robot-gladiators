

// function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  
  return value;
}  

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, //comma!
  refillHealth: function() {
   if (this.money >= 7) {
     window.alert("Refilling player's health by 20 for 7 dollars."); 
    this.health += 20;
    this.money -= 7;
   }
   else {
     window.alert("You don't have enough money!");
   }
  }, //comma!

  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
    
  }
    else {
      window.alert("You don't have enough money!");
    }
}
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

 


// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerMoney", playerInfo.money);
        break;
      }
    }

    // randomizes the damage done by the player object to the enemy object(s)
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
// remove enemy's health by subtracting the amount set in the playerAttack variable
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerName + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};

// fight each enemy-robot by looping over them and fighting them one at a time

//function to start a new game created 

var startGame = function() {
// reset player stats
playerInfo.reset();  

for (var i = 0; i < enemyInfo.length; i++) {
  // if player is still alive, keep fighting
  if (playerInfo.health > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyObj = enemyInfo[i];

    // reset enemyHealth before starting new fight
    pickedEnemyObj.health = randomNumber(40, 60);

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyObj);
    // if we're not at the last enemy in the array
    if(playerInfo.health > 0 && i < enemyNames.length - 1) {
      // ask if player wants to use the store before next round
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
      //if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }
      
    }
  }

  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
  
}
  endGame();
};
// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  }
  else {
  window.alert("You've lost your robot in battle.");
  }
  // Ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
  
  if (playAgainConfirm) {
    // restart the game
  startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
       
     }
    };
  var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
      "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE'."
    
    );

    // use switch to carry out action
    switch (shopOptionPrompt) {
      case "REFILL": //new case goes here
      case "refill":
      playerInfo.refillHealth();
      break;

      case "UPGRADE": //new case goes here
      case "upgrade":
      playerInfo.upgradeAttack();
      break; 
        
        
      
        case "LEAVE": // new case goes here
        case "leave":
        window.alert("Leaving the store.");
        
        // do nothing, so function will end
        break;
        default: 
          window.alert("You did not pick a valid option. Try again.");

          // call shop() again to force player to pick a valid option
          shop();
          break;
    }
   
  };
  


// 1. Add the startGame() function to define (and reset) the state of the game
// 2. Add the endGame() function to display stats and prompt the player to play again.
// 3. Finalize the MVP and switch branches.
// 4. Add the shop() function for all shop-related logic.
// 5. Save our progress by using Git.

// start the game when the page loads
startGame();

/* prints 100
console.log(Math.max(10, 20, 100));
prints 0
console.log(Math.max(0, -50)); */ 

/* Alternatively, how could we have prevented negative values with if statements instead of Math.max

playerMoney = playerMoney - 10;
if (playerMoney < 0) {
  playerMoney = 0;
}       */

// addTwoNumber(number1, number2){
// return number1 + number2
// };
// addTwoNumber(10, 5);