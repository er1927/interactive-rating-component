const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const star = document.getElementById("star-container");
const title= document.getElementById("title");
const text = document.getElementById("text");
const ratingSelection = document.getElementById("rating-selection");
const submitDiv = document.getElementById("submit");

function selectRatingNumberOne() {
    one.style.backgroundColor = " hsl(25, 97%, 53%)";
    one.style.color = "white";
}

function selectRatingNumberTwo() {
    two.style.backgroundColor = " hsl(25, 97%, 53%)";
    two.style.color = "white";
}

function selectRatingNumberThree() {
    three.style.backgroundColor = " hsl(25, 97%, 53%)";
    three.style.color = "white";
}

function selectRatingNumberFour() {
    four.style.backgroundColor = " hsl(25, 97%, 53%)";
    four.style.color = "white";
}

function selectRatingNumberFive() {
    five.style.backgroundColor = " hsl(25, 97%, 53%)";
    five.style.color = "white";
}



function submit() {
    star.remove();
    title.innerHTML = "Thank you!";
    title.style.textAlign = "center";
    text.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
    ratingSelection.remove();
    submitDiv.remove();
}

