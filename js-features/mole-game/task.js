const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let countDead = 0;
let countLost = 0;

getHole = (index) => {
    return document.getElementById(`hole${index}`);
}

for (let index = 1; index <= 9; index++) {
getHole(index).onclick = () => {
    if (getHole(index).classList.contains("hole_has-mole")) {
        let numDead = Number(dead.textContent);
        countDead = numDead += 1;
        dead.textContent = countDead;
    } else {
        let numLost = Number(lost.textContent);
        countLost = numLost += 1;
        lost.textContent = countLost;
    }

    if (countLost === 5) {
        dead.textContent = 0;
        lost.textContent = 0;
        alert("You loose");
    }

    if (countDead === 10) {
        dead.textContent = 0;
        lost.textContent = 0;
        alert("You win!!!");
    }
}
}

