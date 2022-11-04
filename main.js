function CreateGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Logo do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Logo da ${player2}">
    </li>
    `
}

let delay = 0;
function CreateCard(date, day, games) {
    delay = delay + 0.3; /* determina dinamicamente o tempo de aparição de cada cartão, neste caso o próximo cartão aparece 0.3s depois do anterior*/
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}  
        </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML = 
        CreateCard("24/11", "Quinta", CreateGame('brazil', '16:00', "serbia") + 
        CreateGame('portugal', '16:00', "ghana")) +
        
        CreateCard("28/11", "Segunda", CreateGame('brazil', '13:00', 'switzerland'))
    
