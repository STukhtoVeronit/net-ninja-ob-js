function User(name, email){
    this.email = email;
    this.name = name;
    this.online = false;
    // this.login = function(){
    //     this.online = true;
    //     console.log(this.email, 'has logged in');
    // }
}
User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'Has logged in');
};

function Admin(...args){
    User.apply(this, args);
}
Admin.prototype = Object.create(User.prototype);


let users = [];
users.push(new User('John','snow@mail.com'));
users.push(new User('John2','snow222@mail.com'));

let admin = new Admin('Shaun', 'bdb')
console.log(users[1]);
users[1].login();
console.log(users[1]);


// class User {
//     constructor(email, name){
//         this._email = email;
//         this._name = name;
//         this._score = 0;
//     }
//     get email(){
//         return this._email;
//     }
//     set email(email){
//         this.email = email
//     }
//     get name(){
//         return this._name;
//     }
//     set name(email){
//         this._name = email
//     }
//     get score(){
//         console.log(this._score);
//         return this;
//     }
//     updateScore(){
//         this._score += 1;
//         return this;
//     }
// }
//
// class Admin extends User{
//     constructor(email, name){
//         super(email, name);
//     }
//     deleteUser(user, users){
//         return users.filter(u => {
//             return u.email !== user.email;
//         })
//     }
// }
//
//
//
// (function(){
//     let users = [];
//     users.push(new User('John','snow@mail.com'));
//     users.push(new User('John2','snow222@mail.com'));
//
//     let admin = new Admin('Admin', 'Addme@mail.dog');
//     users = admin.deleteUser(users[0], users);
//
//     console.log(users);
// })();