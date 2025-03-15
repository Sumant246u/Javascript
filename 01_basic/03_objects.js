//singleton

//object literals

const mysym=Symbol("key1")


const jsuser={
    name:'hitesh',
    "full name":"sumant Sahoo",
   [mysym]:'mykey1',
    age:18,
    location:"hyd",
    email:'sumant@gmail.com',
    isLoggedin:false,
    lastLoginDays:["monday","Saturday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);

jsuser.email="sumant77@chatgpt.com"
// Object.freeze(jsuser)
jsuser.email="sumant@microsoft.com"
console.log(jsuser);


jsuser.greeting=function (){
    console.log("Hello Js user");
    
}
console.log(jsuser.greeting());




