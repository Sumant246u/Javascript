// Object literal

const user={
    username:'Sumant',
    loginCount:8,
    signedIn:true,


    getUserDeatails:function(){
        //console.log("Got user details from database");   
        //console.log(`username: ${this.username}`);
        //console.log(this);
           
    }

}


//console.log(user.username);
//console.log(user.getUserDeatails());
//console.log(this);


//Constructor function
function User(username,loginCount,isLoggedin){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedin=isLoggedin

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}
const userOne=new User("sumant",12,true)
const userTwo= new User('Raja',15,false)
console.log(userOne.constructor);
//console.log(userTwo);




//New Keyword

//1. first create a empty object is called instance
//2. Call a constructor function because of new keyword 
//3. Inject all argument in this keyword
//4. Lastly we got all inside the function