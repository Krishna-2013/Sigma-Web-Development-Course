let students = ["krishyna", "rife", "Banku Vaiya", "sudiptio", "kkb", "Additto", "Souriavansam", "florin", "ria", "PK the Rockstar"];

let houses = [];

for(const name of students) {
    if(name.length < 6) {
        houses.push("Gryffindor");
    }
    else if(name.length < 8) {
        houses.push("Hufflepuff");
    }
    else if(name.length < 12) {
        houses.push("Ravenvlaw");
    }
    else if(name.length >= 12) {
        houses.push("Slytherin");
    }
    else {
        houses.push("Error with " + name);
    }
}

console.log(houses);