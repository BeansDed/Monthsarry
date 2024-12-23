const text =
  "Hi to my Favorite Person, Happy NewYear and Happy 9TH Monthsarry. You are the person that i always admired because of how strong you are and how dedicated you are. I know na minsan we have some ups and downs and sometimes na stress kana hindi mo na mafocus lahat lahat and i am proud of you for being this strong. Thank you For being in my life this year, I can promise you i will always stay by your side no matter what, Thank you for everything I LOVEN YOU TEH <3";

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