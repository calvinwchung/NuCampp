function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1
        alert('You rolled a ' + roll + '.');
        
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if (roll < 4) {
            alert('Roll again');
            continue;
        }
        if (roll === 4 && goldCoins > 0) {
            goldCoins -= 1;
            alert('You rolled a 4. Subtracting 1 gold.')

        
        }
        goldCoins += roll;
            alert('You won ' + roll + ' gold coins! \n\n\Total Gold Coins: ' + goldCoins);
        
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}