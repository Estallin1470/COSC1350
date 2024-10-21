/*
	Tipton Turbines
     Program to display games results in a web table
     Author: Emiley Stallings
     Date: 10/21/24

     Filename: js03.js
 */

// Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.addEventListener("load", addWeekDays);

// Weekday names function
function addWeekDays() {
    let i = 0; // initial counter value

    // Collection of heading cells reference
    let headingCells = document.getElementsByTagName("th");

    // Write each day into heading cell
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];

        // Increase counter by 1
        i++;
    }
}

window.addEventListener("load", showGames);

// game information function 
function showGames() {
    for (let i = 0; i < gameDates.length; i++) {
        let gameInfo = "";

        //Open paragraph
        switch (gameResults[i]) {
            case "W":
                gameInfo += "<p class='win'>";
                break;
            case "L":
                gameInfo += "<p class='lose'>";
                break;
            case "S":
                gameInfo += "<p class='suspended'>";
                break;
            case "P":
                gameInfo += "<p class='postponed'>"; 
                break;           
        }

        //Display game location
        if (gameLocations[i] === "h") {
            gameInfo += "vs. ";
        } else if (gameLocations[i] === "a") {
            gameInfo += "@ ";

        }

        //Include opponent
        gameInfo += gameOpponents[i] + "<br>";

        // In clude results and score
        gameInfo += gameResults[i] +": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

        //Display innings played for suspended, shorthened, or extraining games
        if (gameInnings[i] < 5) {
            gameInfo += " [" + gameInnings[i]+"]***"
        } else if (gameInnings[i] < 9) {
            gameInfo += " [" + gameInnings[i]+"]*";
        } else if (gameInnings[i] > 9) {
            gameInfo += " [" + gameInnings[i] + "]";
        }
        
        //close paragraph
        gameInfo += "</p>";

        //Write informantion into table cell
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo)

    }
}