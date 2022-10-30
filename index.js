let globalIsSubmitted = false;

function validate(isSubmitted = false) {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phone-number").value;
  let country = document.getElementById("country").value;
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  let others = document.getElementById("others").checked;
  let error = false;

  if (isSubmitted) {
    globalIsSubmitted = true;
  }

  if (globalIsSubmitted) {
    let candidateFirstName = parseInt(firstName);
    if (firstName.length >= 3 && isNaN(candidateFirstName)) {
      document.getElementById("first-name-valid").style.display = "block";
      document.getElementById("first-name-invalid").style.display = "none";
    } else {
      document.getElementById("first-name-invalid").style.display = "block";
      document.getElementById("first-name-valid").style.display = "none";
      error = true;
    }

    let candidateLastName = parseInt(lastName);
    if (lastName.length >= 3 && isNaN(candidateLastName)) {
      document.getElementById("last-name-valid").style.display = "block";
      document.getElementById("last-name-invalid").style.display = "none";
    } else {
      document.getElementById("last-name-invalid").style.display = "block";
      document.getElementById("last-name-valid").style.display = "none";
      error = true;
    }

    if (
      email.includes("@") &&
      email.includes(".") &&
      email.indexOf("@") != 0 &&
      (email.lastIndexOf(".") == email.length - 3 ||
        email.lastIndexOf(".") == email.length - 4)
    ) {
      document.getElementById("email-valid").style.display = "block";
      document.getElementById("email-invalid").style.display = "none";
    } else {
      document.getElementById("email-invalid").style.display = "block";
      document.getElementById("email-valid").style.display = "none";
      error = true;
    }

    let candidatePhoneNumber = parseInt(phoneNumber);
    if (
      phoneNumber.length == 10 &&
      !isNaN(candidatePhoneNumber) &&
      phoneNumber.indexOf("0") != 0 &&
      phoneNumber.indexOf("1") != 0 &&
      phoneNumber.indexOf("2") != 0 &&
      phoneNumber.indexOf("3") != 0 &&
      phoneNumber.indexOf("4") != 0 &&
      phoneNumber.indexOf("5") != 0
    ) {
      document.getElementById("phone-number-valid").style.display = "block";
      document.getElementById("phone-number-invalid").style.display = "none";
    } else {
      document.getElementById("phone-number-invalid").style.display = "block";
      document.getElementById("phone-number-valid").style.display = "none";
      error = true;
    }

    if (male || female || others) {
      document.getElementById("valid-gender").style.display = "block";
      document.getElementById("invalid-gender").style.display = "none";
    } else {
      document.getElementById("invalid-gender").style.display = "block";
      document.getElementById("valid-gender").style.display = "none";
      error = true;
    }

    if (country != "None") {
      document.getElementById("country-valid").style.display = "block";
      document.getElementById("country-invalid").style.display = "none";
    } else {
      document.getElementById("country-invalid").style.display = "block";
      document.getElementById("country-valid").style.display = "none";
      error = true;
    }

    if (!error && isSubmitted) {
      alert(" your details have been  saved sucessfully!");
      document.getElementById("registration-form").reset();

      let validFeedbacks = document.getElementsByClassName("valid-feedback");
      for (let i = 0; i < validFeedbacks.length; i++) {
        validFeedbacks[i].style.display = "none";
      }

      let invalidFeedbacks =
        document.getElementsByClassName("invalid-feedback");
      for (let i = 0; i < invalidFeedbacks.length; i++) {
        invalidFeedbacks[i].style.display = "none";
      }
    }
  }
}
