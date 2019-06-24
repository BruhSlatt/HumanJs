function display(content){
    console.log(content)
}
// define functions


// define parent 
class Human{
    constructor(name, age, food, skill){
        this.names = name;
        this.ages = age;
        this.skills = skill;
        this.eats = food;
    }
    name(){
        return "hi my name is "+ this.names+"!"
    }
    age(){
        return "my age is "+ this.ages
    }
    eat(){
        return "I like to eat "+ this.eats
    }
    skill(){
        return "I can "+this.skills
    }
}
// child class
class Tony extends Human{
    constructor(name, age, food, skill){
        super(name, age, food, skill);
    }
    combo(){
        return "I can eat "+super.eat()+ "and "+ super.skill()+ "at the same time!"
    }
}
let me = new Tony("Tony", 17, "Cheese", "sleep for vast amounts of time" );
    display(me.name());
    display(me.age());
    display(me.eat());
    display(me.skill());
    display(me.combo());