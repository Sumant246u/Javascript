let myName='sumant      '
let mysurname='Raja    '

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

//

//Inheritance

const User={
    name:'chai',
    email:'chai@gmail.com'
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TAsupport={
    makeAssignment:'Js assignment',
    fullTime:true,

    __proto__:TeachingSupport
}

Teacher:__proto__=User


//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername='chaiAurcode    '

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True lenth is : ${this.trim().length}`);
       
}

anotherUsername.trueLength();
"hitesh".trueLength()
"iceTea".trueLength()