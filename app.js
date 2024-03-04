
let game_seq = [];
let user_seq = [];
let btns = ["pink", "orange", "blue", "purple"];

let start = false;
let lvl = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (!start) {
        console.log("Game started");
        start = true;
        levelup();
    }
});

function flashButton(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function flashscr() {
    h3.classList.add("flashscr");
    setTimeout(function () {
        h3.classList.remove("flashscr");
    }, 100);
}

function flashuser(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 170);
}

function levelup() {
    user_seq = [];
    lvl++;
    h3.innerText = `Level ${lvl}`;

    let randomindex = Math.floor(Math.random() * 4);
    let randomColor = btns[randomindex];
    let randomBtn = document.querySelector('#' + randomColor);
    flashButton(randomBtn);
    console.log(randomColor)

    game_seq.push(randomColor);
}

function checkans() {
    let index = user_seq.length - 1;
    if (game_seq[index] == user_seq[index]) {
        if (user_seq.length === game_seq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h3.innerHTML = `Game Over!Your score was ${lvl} . Press any key to start `;
        flashscr();
        reset();
    }
}

function btnPress() {
    let btn = this;
    flashuser(btn);
    let usercolor = btn.getAttribute("id");
    console.log(usercolor);
    user_seq.push(usercolor);
    checkans(user_seq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    start = false;
    game_seq = [];
    user_seq = [];
    lvl = 0;
}
