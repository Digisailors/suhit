let submitted = false;

function validateName() {
  let name = document.getElementById("name").value;
  if (name.length == 0) {
    alert("Name can't be blank");
    return false;
  }
  if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
    alert("Please enter your correct name"); //Validation Message
    return false;
  }
  return true;
}

function validatePhone() {
  let phone = document.getElementById("mobile").value;
  if (phone.length == 0) {
    alert("Mobile number can't be blank"); //Validation Message
    return false;
  }

  if (!phone.match(/^\d{10}$/)) {
    alert("Please enter a correct Mobile number"); //Validation Message
    return false;
  }

  return true;
}

function validateForm() {
  if (!validateName() || !validatePhone() ) {
    alert("Form not submitted"); //Validation Message
    return false;
  } else {
    submitted = true;
    return true;
  }
}