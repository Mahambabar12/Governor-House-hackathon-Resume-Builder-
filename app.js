"use strict";
function addNewWWEFeild() {
    // console.log('Adding new field');
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder', "Ente here");
    let weOb = document.getElementById('we');
    let weAddButtonOb = document.getElementById('weAddButton');
    weOb === null || weOb === void 0 ? void 0 : weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQFeild() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder', "Ente here");
    let eqOb = document.getElementById('eq');
    let eqAddButtonOb = document.getElementById('eqAddButton');
    eqOb === null || eqOb === void 0 ? void 0 : eqOb.insertBefore(newNode, eqAddButtonOb);
}
// Generating CV
function generateCV() {
    //  console.log('Generating CV');
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;

    //direct
    // document.getElementById('nameT2').innerHTML=nameField;
    document.getElementById('nameT2').innerHTML= document.getElementById("nameField").value

    //Contact
    document.getElementById('contactT').innerHTML= document.getElementById("contactField").value;

    //address
    document.getElementById('addressT').innerHTML=document.getElementById("addressField").value

    document.getElementById('fbT').innerHTML=document.getElementById("fbField").value
    document.getElementById('isntaT').innerHTML=document.getElementById("instaField").value
    document.getElementById('linkedT').innerHTML=document.getElementById("linkedField").value

    //Objective
    document.getElementById('objectiveT').innerHTML=document.getElementById("objectiveField").value

    //We

    let wes=document.getElementsByClassName('weField')

let str=''
for(let e of wes){
      str=str +`<li> ${e.value} </li>`
}

document.getElementById('weT').innerHTML=str

//aq

let eqs=document.getElementsByClassName('eqField')

str=''
for(let e of eqs){
      str=str +`<li> ${e.value} </li>`
}

document.getElementById('eqT').innerHTML=str

document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'

}
// function showCV() {
//     var img = document.getElementById('cvImage');
//     img.style.display = 'block';  // Show the image when button is clicked
// }

function toggleCV() {
    var img = document.getElementById('cvImage');
    var button = document.querySelector('button');
    
    if (img.style.display === 'none' || img.style.display === '') {
        img.style.display = 'block';  // Show the image
        button.textContent = 'Hide Resume'; // Change button text to "Hide"
    } else {
        img.style.display = 'none';  // Hide the image
        button.textContent = 'My Resume'; // Change button text to "Show"
    }
}


//print cv
function printCV() {
    window.print();
}