class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email=value
    }


    get password(){
        return `${this._password}sumant`
    }
    set password(value){
        this._password=value
    }
}

const sumant=new User('sumant33@22.ai','abc')
console.log(sumant.email);
