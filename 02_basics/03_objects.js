// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Wasim",
    "full name": "Md Wasim Ansari",
    [mySym]: "myKey1",
    age: 18,
    location: "Jharkhand",
    email: "wasim@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "wasim@facebook.com"
// Object.freeze(JsUser)
// JsUser.email = "wasim@twitter.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());