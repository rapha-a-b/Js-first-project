let FirstName = prompt("please enter your name");
let mail = prompt("please enter your email");
console.log(FirstName + " " + mail);
let gender = prompt("Are you Male or Female?").toUpperCase();
if (gender === "MALE" || gender === "FEMALE") {
  if (gender === "MALE") {
    alert("ברוך הבא " + FirstName);
  } else if (gender === "FEMALE") {
    alert("ברוכה הבאה " + FirstName);
  }
} else {
  alert("invalid Gender");
}

let newsletter = confirm("would you like to subscribe to our newsletter?");
if (newsletter === true) {
  alert("thank you your email :" + mail + "was registered");
} else {
  alert("your lose");
}

let userAge = prompt("what is your age?");
userAge = Number(userAge);
console.log(typeof userAge);
if (typeof userAge !== "number") {
  userAge = prompt("please enter your age using numbers only");
}
if (userAge <= 0) {
  alert("you are not born yet");
} else if (userAge < 13) {
  alert("you are  a child");
} else if (userAge < 18) {
  alert("you are a teenager");
} else if (userAge > 18) {
  prompt("you are a Man/Woman");
} else if (userAge >= 120) {
  prompt("Hope you are in Heaven 👼");
}
