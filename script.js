const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const star = document.getElementById("star-container");
const thankYouImg = document.getElementById("thank-you-img");
const yourSelection = document.getElementById("your-selection");
const title= document.getElementById("title");
const text = document.getElementById("text");
const ratingSelection = document.getElementById("rating-selection");
const ratingNumber = document.querySelectorAll("rating-number");
const submitDiv = document.getElementById("submit");
let num = ratingNumber.innerHTML;

function selectRatingNumberOne() {
    one.style.backgroundColor = "hsl(25, 97%, 53%)";
    one.style.color = "white"; 
}

function selectRatingNumberTwo() {
    two.style.backgroundColor = "hsl(25, 97%, 53%)";
    two.style.color = "white";
}

function selectRatingNumberThree() {
    three.style.backgroundColor = "hsl(25, 97%, 53%)";
    three.style.color = "white";
}

function selectRatingNumberFour() {
    four.style.backgroundColor = "hsl(25, 97%, 53%)";
    four.style.color = "white";
}

function selectRatingNumberFive() {
    five.style.backgroundColor = "hsl(25, 97%, 53%)";
    five.style.color = "white";
}

function submit() {
    star.remove();
    thankYouImg.style.display ="block";
    thankYouImg.style.margin = "1px auto";
    yourSelection.style.textAlign = "center";
    yourSelection.style.backgroundColor = "hsl(227, 8%, 23%)";
    // yourSelection.innerHTML = `You selected ${num} out of 5`;
    yourSelection.style.borderRadius = "20px"
    yourSelection.style.padding = "auto 2px";
    yourSelection.style.color = "hsl(25, 97%, 53%)";
    title.innerHTML = "Thank you!";
    title.style.textAlign = "center";
    text.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
    ratingSelection.remove();
    submitDiv.remove();
}
