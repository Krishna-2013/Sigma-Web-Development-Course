// let obj = {
//     a : 1,
//     b : "Krishna"
// }

// let animal = {
//     eats : true,
// }

// let rabbit = {
//     jumps : true,
// }

// rabbit.__proto__ = animal;

class animal {
    constructor(name) {
        this.name = name;
        console.log("Object is created...");
    }
    
    eats ()  {
        console.log("I am eating");
    }
    jumps ()  {
        console.log("I am jumping");
    }
}

class lion extends animal {
    constructor(name) {
        super(name);
        console.log("Object is created and I am a lion...");
    }

    eats ()  {
        super.eats();
        console.log("I am eating and roaring");
    }
}

let a = new animal("Bunny");
console.log(a);

let l = new lion("Sherr");
console.log(l);