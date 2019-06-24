// create a function that console logs any argument given
function display (content){
    console.log(content); 
}
// create a function that takes a name or string as a parameter
// and returns "hi my name is " parameter given
function name(name){
    return "Hi, my name is "+ name+".";
}

// create 3 functions that describes 3 powers of a ninja you would like to create

function jump(Jump){
    return "Ninja jumps "+ Jump+ " spaces."
}
function attack(Attack){
    return Attack+" did 4 damage"
}
function sneak(Sneak){
    return "Ninja sneaks "+ Sneak+ " spaces."
}

// Oject Oriented Programing
// Incapsultaion- grouping all behavior 
const ninja = {
    name(name){
        return "Hi, my name is "+ name+".";
    },
    jump(Jump){
        return "Ninja jumps "+ Jump+ " spaces."
    },
    attack(Attack){
        return Attack+" did 4 damage"
    },  
    sneak(Sneak){
        return "Ninja sneaks "+ Sneak+ " spaces."
    },
}

// display(ninja.name("Sasuke"));
// display(ninja.jump(7));
// display(ninja.sneak(5));
// display(ninja.attack("Tickle"));



// create a class for instantiating ninjas
// OOP Abstraction- hiding complexity from the user
class NinJesus {
    constructor(name, attack, speed){
        this.nameInsideNinJesus = name;
        this.attacks = attack;
        this.speeds = speed;

    }

    name(){
        return "Aye, my name is " + this.nameInsideNinJesus
    }
    attack(){
        return this.nameInsideNinJesus+ " can use "+ this.attacks
    }
    speed(){
        return this.nameInsideNinJesus+"'s speed level is "+ this.speeds
    }
}
// OOP inheritence- objects inheriting properties and methods from classes
let itachi = new NinJesus("Itachi", "Sharingan", "fast" )

display(itachi.name());
display(itachi.speed());
display(itachi.attack());