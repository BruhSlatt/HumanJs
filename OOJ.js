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

display(name("Sasuke"));
display(jump(7));
display(sneak(5));
display(attack("Tickle"));
