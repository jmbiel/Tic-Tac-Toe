"use strict";
var player = 1;
var gameboard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

function fill_cell(x, y, div) {
    gameboard[x][y] = player;
    console.log(gameboard);

    var elem = document.createElement("img");
    elem.width = "75";
    elem.height = "75";
    elem.id = div + "_img";
    console.log(elem.id);

    if (player == 1) {
        elem.src = "images/x_img.jpg";
        var doc_elem = document.getElementById(div);
        doc_elem.appendChild(elem);
        player = 2;
    }

    else {
        elem.src = "images/o_img.jpg";
        var doc_elem = document.getElementById(div);
        doc_elem.appendChild(elem);
        player = 1;
    }
    check_win();
}

function clear_board() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            gameboard[i][j] = 0;
        }
    }

    for (var i = 0; i <= 9; i++){
        var str = "cell_" + i + "_img";
        try {
            document.getElementById(str).remove();
        } catch(e) {}
    }
    console.log(gameboard);
}

function check_win() {
    /* Check all rows */
    if (gameboard[0][0] == 1 && gameboard[0][1] == 1 && gameboard[0][2] == 1) {
        alert("X has won the game!");
    }

    else if (gameboard[0][0] == 2 && gameboard[0][1] == 2 && gameboard[0][2] == 2) {
        alert("O has won the game!");
    }

    else if (gameboard[1][0] == 1 && gameboard[1][1] == 1 && gameboard[1][2] == 1) {
        alert("X has won the game!");
    }

    else if (gameboard[1][0] == 2 && gameboard[1][1] == 2 && gameboard[1][2] == 2) {
        alert("O has won the game!");
    }

    else if (gameboard[2][0] == 1 && gameboard[2][1] == 1 && gameboard[2][2] == 1) {
        alert("X has won the game!");
    }

    else if (gameboard[2][0] == 2 && gameboard[2][1] == 2 && gameboard[2][2] == 2) {
        alert("O has won the game!");
    }

    /*Check columns */

    else if (gameboard[0][0] == 1 && gameboard[1][0] == 1 && gameboard[2][0] == 1) {
        alert("X has won the game!");
    }

    else if (gameboard[0][0] == 2 && gameboard[1][0] == 2 && gameboard[2][0] == 2) {
        alert("O has won the game!");
    }

    else if (gameboard[0][1] == 1 && gameboard[1][1] == 1 && gameboard[2][1] == 1) {
        alert("X has won the game!");
    }

    else if (gameboard[0][1] == 2 && gameboard[1][1] == 2 && gameboard[2][1] == 2) {
        alert ("O has won the game!");
    }

    else if (gameboard[0][2] == 1 && gameboard[1][2] == 1 && gameboard[2][2] == 1) {
        alert ("X has won the game!");
    }

    else if (gameboard[0][2] == 2 && gameboard[1][2] == 2 && gameboard[2][2] == 2) {
        alert ("O has won the game!");
    }

    /*Check Diagonals */

    else if (gameboard[0][0] == 1 && gameboard[1][1] == 1 && gameboard[2][2] == 1) {
        alert ("X has won the game!");
    }

    else if (gameboard[0][0] == 2 && gameboard[1][1] == 2 && gameboard[2][2] == 2) {
        alert ("O has won the game!");
    }

    else if (gameboard[0][2] == 1 && gameboard[1][1] == 1 && gameboard[2][0] == 1) {
        alert ("X has won the game!");
    }

    else if (gameboard[0][2] == 2 && gameboard[1][1] == 2 && gameboard[2][0] == 2) {
        alert ("O has won the game!");
    }
}