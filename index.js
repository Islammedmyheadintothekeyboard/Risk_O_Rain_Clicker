

let enemyHp = 100;
let attackPower = 5;
let defense = 2;
let level = 1;

function attackEnemy() {
  // Calculate damage
  let damage = Math.max(attackPower - defense, 1);  // Ensure minimum damage of 1
  enemyHp -= damage;

  // Update enemy's health
  document.getElementById('enemyHp').innerText = enemyHp;

  // Check if enemy is dead
  if (enemyHp <= 0) {
    enemyHp = 100;  // Reset enemy health
    levelUp();
    spawnNewEnemy();
  }
}

function levelUp() {
  // Increase level and stats
  level++;
  attackPower += 2;
  defense++;

  // Update attribute display
  document.getElementById('atr1').innerText = 'Attack: ' + attackPower;
  document.getElementById('atr2').innerText = 'Defense: ' + defense;
  document.getElementById('atr3').innerText = 'Level: ' + level;
}

function spawnNewEnemy() {
  // Simulate a new enemy appearing after the old one dies
  let newEnemy = document.createElement('div');
  newEnemy.classList.add('enemy');
  newEnemy.innerText = 'DEFEATED ENEMY - NEW ENEMY APPEARS!';
  newEnemy.setAttribute('onclick', 'attackEnemy()');

  let enemyContainer = document.querySelector('.enemysquare');
  enemyContainer.appendChild(newEnemy);

  // Make sure the previous enemy is removed
  let oldEnemy = document.getElementById('enemy');
  oldEnemy.remove();

  // Set the new enemy as the main enemy
  newEnemy.id = 'enemy';
}

function gamble() {
  // Randomly assign an effect from gambling
  let outcome = Math.random();
  if (outcome < 0.33) {
    alert('LUNAR effect: Attack increased!');
    attackPower += 3;
    document.getElementById('atr1').innerText = 'Attack: ' + attackPower;
  } else if (outcome < 0.66) {
    alert('VOID effect: Defense increased!');
    defense += 2;
    document.getElementById('atr2').innerText = 'Defense: ' + defense;
  } else {
    alert('PETS effect: Level up!');
    levelUp();
  }
}
