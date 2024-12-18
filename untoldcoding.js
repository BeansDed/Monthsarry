const text =
  "Happy 9th monthsarry,               i know ngayon lang me nakagawa neto kasi super busy din po eh, and right now i want to make one just for this. Matagal ko ng gusto gawin tong website na to para wala lang. Anyway thank you for being here with me kahit minsan may nag aaway tayo and minsan naiinis tayo sa isa't isa, you're stillhere. And i just wanna say i'll be here for you anything you need, anything you want i want to help you specially super pagod pagod kana and i want to stay with you kahit sobrang baba mo na sa buhay mo i'll be here supporting you and pwede naman ikaw umiyak and rant everything saakin. Thank you for everthing teh HAPPY MONTHSARRY 💖💖💖. I will always love you <3";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();