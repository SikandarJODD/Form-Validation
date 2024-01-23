function isName() {
  let fullname = document.getElementById("fullname").value;
  let isvalid = document.getElementById("valid_fullname");
  if (fullname.length < 5) {
    isvalid.innerHTML = "Fullname must be at least 5 characters";
    isvalid.style.color = "red";
    return false;
  } else {
    isvalid.innerHTML = "";
    return true;
  }
}

function isEmail() {
  let email = document.getElementById("email").value;
  let isvalid = document.getElementById("valid_email");
  let reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (reg.test(email)) {
    isvalid.innerHTML = "";
    return true;
  } else {
    isvalid.innerHTML = "Enter Correct Email";
    isvalid.style.color = "red";
    return false;
  }
}

function numValid() {
  let num = document.getElementById("phone").value;
  let isvalid = document.getElementById("valid_num");
  let reg = /^[0-9]{10}$/;
  if (reg.test(num) && num.length >= 10) {
    isvalid.innerHTML = "";
    return true;
  } else {
    isvalid.innerHTML = "Number is invalid";
    isvalid.style.color = "red";
    return false;
  }
}

function passValid() {
  let pass = document.getElementById("password").value;
  let fullname = document.getElementById("fullname").value;
  let isvalid = document.getElementById("valid_pass");
  let reg = /^[a-zA-Z0-9]{8,}$/;
  if (pass == fullname) {
    isvalid.innerHTML = "Password should not be same as Fullname";
    isvalid.style.color = "red";
    return false;
  } else if (reg.test(pass)) {
    isvalid.innerHTML = "";
    return true;
  } else {
    isvalid.innerHTML = "Password is not Strong";
    isvalid.style.color = "red";
    return false;
  }
}

function confPass() {
  let pass = document.getElementById("password").value;
  let confpass = document.getElementById("confirm_password").value;
  let isvalid = document.getElementById("valid_confpass");
  if (pass == confpass) {
    isvalid.innerHTML = "";
    return true;
  } else {
    isvalid.innerHTML = "Password is not matched";
    isvalid.style.color = "red";
    return false;
  }
}

function allcheck() {
  if (isName() && isEmail() && numValid() && passValid() && confPass()) {
    alert("Form Submitted Successfully!");
  } else {
    alert("Form Not Submitted! Please fill all the fields correctly");
  }
}
