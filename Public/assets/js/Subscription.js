let submitted = false;
function validateEmail() {
  let email = document.getElementById("email").value;
  if (email.length == 0) {
    alert("Email can't be blank"); //Validation Message
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    alert("Please enter a correct email address"); //Validation Message
    return false;
  }

  return true;
}

function validateForm() {
  if (!validateEmail()) {
    alert("Form not submitted"); //Validation Message
    return false;
  } else {
    submitted = true;

    return true;
  }
}