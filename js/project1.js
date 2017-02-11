$(document).ready(function() {
    Project.SteakTemperature();
})

var Project = {
    SteakTemperature: function() {
        console.log("We are going to determine how \"done\" our steak is.");
        console.log("What is the inner temperature of your steak?");
        
        var temp = prompt("What is the inner temperature of your steak?", -1);
        while (temp === -1)
        {
            temp = prompt("Please enter a temperature.", -1);
        }

        if(temp < 130)
        {
            console.log("Your food is undercooked - please cook this food to a higher temperature or discard it immediately.");
        } else if (temp < 140) {
            console.log("Your steak is rare.");
        } else if (temp < 145) {
            console.log("Your steak is medium-rare.");
        } else if (temp < 160) {
            console.log("Your steak is medium.");
        } else if (temp < 170) {
            console.log("Your steak is well done.");
        } else {
            console.log("You have overcooked your steak.");
        }
    }
}