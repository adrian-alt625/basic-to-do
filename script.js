//do crtl+shift+g to open the "commit menu" to submit the updated version to GitHub
"use strict";

//assigning values for the "upload button" and the file input
const fileInput = document.querySelector(".fileInput");
const upload = document.querySelector(".uploadBtn");
const create = document.querySelector(".createBtn");
const btnContainer = document.querySelector(".button-container");
const main = document.querySelector(".main-container");

//initiating file input (through file explorer) once the "upload" button is pressed
upload.addEventListener("click", openFE);
//what happens when "upload" button is pressed
function openFE() {
  console.log("hello world");
  fileInput.click();
}

//calls the "readFile" function when a file is uploaded
fileInput.addEventListener("change", readFile);
//reading the file, creating an array where each line is stored seperately in an array
function readFile() {
  console.log("hi guys");

  let reader = new FileReader();

  reader.readAsText(fileInput.files[0]);

  reader.onload = function () {
    let text = reader.result;

    text = text.split("\n");
    text = text.map((line) => line.trim());
    console.log(text);
    change();
  };
}

// calls the "change" function when "create" button is clicked
create.addEventListener("click", change);

// make a function that removes the "startup" elements and adds the to-do-list elements
function change() {
  //removing starting elements
  btnContainer.style.display = "none";
  //adding new elements
  main.style.display = "block";
}

// ADD A TOGGLE FOR DARK AND LIGHT MODE (CHANGES THE BACKGROUND GRADIENT)
