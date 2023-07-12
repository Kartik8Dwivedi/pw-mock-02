document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      // You can perform further actions here, such as submitting the form data to a server.
    }
  });

  function validateForm() {
    // Reset error messages
    resetErrors();

    var isValid = true;

    // Validate name field
    var nameInput = document.getElementById("name");
    var nameError = document.getElementById("nameError");
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required";
      isValid = false;
    }

    // Validate email field
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = "Invalid email address";
      isValid = false;
    }

    // Validate phone number field
    var phoneInput = document.getElementById("phone");
    var phoneError = document.getElementById("phoneError");
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
      phoneError.textContent = "Invalid phone number";
      isValid = false;
    }

    // Validate password field
    var passwordInput = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");
    if (passwordInput.value.length < 6) {
      passwordError.textContent = "Password should be at least 6 characters long";
      isValid = false;
    }

    // Validate age field
    var ageInput = document.getElementById("age");
    var ageError = document.getElementById("ageError");
    if (ageInput.value < 1 || ageInput.value > 120) {
      ageError.textContent = "Age should be between 1 and 120";
      isValid = false;
    }

    // Validate gender field
    var genderInput = document.getElementById("gender");
    var genderError = document.getElementById("genderError");
    if (genderInput.value === "") {
      genderError.textContent = "Gender is required";
      isValid = false;
    }

    // Validate date field
    var dateInput = document.getElementById("date");
    var dateError = document.getElementById("dateError");
    var currentDate = new Date();
    var selectedDate = new Date(dateInput.value);
    if (selectedDate >= currentDate) {
      dateError.textContent = "Invalid date";
      isValid = false;
    }

    // Validate color field
    var colorInput = document.getElementById("color");
    var colorError = document.getElementById("colorError");
    if (colorInput.value === "") {
      colorError.textContent = "Favorite color is required";
      isValid = false;
    }

    return isValid;
  }

  function resetErrors() {
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].textContent = "";
    }
  }