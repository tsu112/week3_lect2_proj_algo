function addNums(number) {
  // first if statment
  if (number == "n") {
    number = "a";
  } else if (number == "j") {
    return 5;
  } else if (number == "w") {
    return 8;
  }

  if (number == "a") {
    return 6 + addNums("k");
  } else {
    return 17;
  }
}

console.log(addNums("n"));
// since number is n, it will work on the first if turning it into a. Now that it's an a, it gets caught on the second if's first. In turn it becomes 6 + addNums("k"). Since it's calling the function again, you will use k to go thru the function. Since k passes thru all the ifs, then it returns 17. Now the equation is 6+17. now the anwser is 23.

// note if the 2nd if states addNums("n"), it will return a error as it will be stuck in a loop.

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

function forLoopRec(num) {
  if (num >= 5) {
    return "Happy March 24th!";
  }
  console.log(num);
  forLoopRec(num + 1);
}

console.log(forLoopRec(10));
