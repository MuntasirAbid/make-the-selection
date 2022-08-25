
const playerArray = [];

function display(player) {

    const playerName = document.getElementById("players");

    playerName.innerHTML = "";

    for (let i = 0; i < player.length; i++) {

        const name = playerArray[i].selectedPlayer;
        console.log(name);
        const li = document.createElement("li");
        playerName.appendChild(li);

        li.innerHTML = `
        ${name}`
    }
}

function addToList(element) {

    const selectedPlayer = element.parentNode.children[1].innerText;
    const playerObj = { selectedPlayer: selectedPlayer }

    playerArray.push(playerObj);


    if (playerArray.length > 5) {
        return alert("You can't add more then 5!!")
    }
    else {
        document.getElementById("total-player-selected").innerText = playerArray.length;
        display(playerArray);
    }

    const selectedTotalPlayer = document.getElementById("total-player-selected");
    const totalPlayer = selectedTotalPlayer.innerText;
    document.getElementById("total-expence-perPlayer").addEventListener('click', function () {
        const budgetPerPlayer = document.getElementById("perPlayerBudget");
        const ammountPerPlayerString = budgetPerPlayer.value;
        const ammountPerPlayer = parseInt(ammountPerPlayerString);

        let totalPlayerexpenses = ammountPerPlayer * totalPlayer;
        const expenses = document.getElementById("playerExpensesTotal");
        // let expenseTotal = expenses.innerText;
        expenses.innerText = totalPlayerexpenses;
        totalPlayerexpenses = playerExpensesTotal;

    })

    document.getElementById("calculate-total").addEventListener('click', function () {
        const expenses = document.getElementById("playerExpensesTotal");
        const playerExpensesAmmountString = expenses.innerText;
        const playerExpenses = parseInt(playerExpensesAmmountString);

        const managerBudgetAmount = document.getElementById("budgetAmmount");
        const managerBudgetString = managerBudgetAmount.value;
        const managerBudget = parseInt(managerBudgetString);
        const coachBudgetAmmount = document.getElementById("coachBudget");
        const budgetForCoachString = coachBudgetAmmount.value;
        const budgetForCoach = parseInt(budgetForCoachString);
        let total = managerBudget + budgetForCoach + playerExpenses;
        console.log(total);

        const totalCost = document.getElementById("total");
        totalCost.innerText = total;
    })
}