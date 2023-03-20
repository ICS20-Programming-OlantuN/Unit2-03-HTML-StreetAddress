// Copyright (c) 2022 Olantu All rights reserved
//
// Created by: Olantu
// Created on: March 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get first name from text field
  let firstName = document.getElementById("first-name").value
	// get age from text field and cast it to integer
  let userAge = parseInt(document.getElementById("age-entered").value)

  // display name and age back to user
  document.getElementById('user-info').innerHTML = "Your first name is " + firstName + " and you are " + userAge + " years old."
}
