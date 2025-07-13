let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resert-btn");

let turn = true; //Player X, Player Y

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button was clicked");
        if (turn) {
            box.innerText = "O";
            turn = false;
        }
        else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();

    });
});

const checkWinner = () => {
    for (pattern of winPatterns) {
        
    }
}