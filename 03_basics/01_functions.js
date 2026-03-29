function sayMyname() {
  console.log("A");
  console.log("S");
  console.log("L");
  console.log("A");
  console.log("M");
}

// sayMyname()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }
function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result

  return number1 + number2;
}

const result = addTwoNumbers(3, 7);

// console.log("result: ", result);

function LoginUserMessage(username = "Aslam") {
    if (!username) 
    // username === undefined
    {
    console.log("Please enter a username");
    return;
  }

  return `${username} just logged in`;
}
// console.log(LoginUserMessage("Aslam"))
// console.log(LoginUserMessage("Aslam Hossain"));

function calculateCartPrice(val1, val2, val3, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Aslam",
    price: 4957
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "Asalm",
    price: 2645
})

const mynewArray = [200, 300, 600, 3000]

function returnSecondValue(getArray){
    return getArray[3]
}
// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200, 4000, 340, 2324, 4234]));

