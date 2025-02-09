//do crtl+shift+g to open the "commit menu" to submit the updated version to GitHub
"use strict";

//assigning values for the "upload button" and the file input
const fileInput = document.querySelector(".fileInput");
const upload = document.querySelector(".uploadBtn");

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
  };
}

// make a function that removes the "startup" elements and adds the to-do-list elements
