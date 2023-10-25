document.addEventListener("DOMContentLoaded", function() {
  const surveyForm = document.getElementById("surveyForm");
  const submitBtn = document.getElementById("submitBtn");
  const resetBtn = document.getElementById("resetBtn");
  const popup = document.getElementById("popup");
  const closePopupBtn = document.getElementById("closePopupBtn");

  submitBtn.addEventListener("click", function() {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const dob = document.getElementById("dob").value;
      const country = document.getElementById("country").value;
      const gender = document.querySelectorAll('input[name="gender"]:checked');
      const profession = document.getElementById("profession").value;
      const email = document.getElementById("email").value;
      const mobile = document.getElementById("mobile").value;
      if (!firstName || !lastName || !dob || !country || gender.length === 0 || !profession || !email || !mobile) {
          alert("Please fill in all fields.");
          return;
      }

    
      const genderValues = Array.from(gender).map(input => input.value);
      const genderStr = genderValues.join(", ");

      document.getElementById("popupFirstName").textContent = firstName;
      document.getElementById("popupLastName").textContent = lastName;
      document.getElementById("popupDob").textContent = dob;
      document.getElementById("popupCountry").textContent = country;
      document.getElementById("popupGender").textContent = genderStr;
      document.getElementById("popupProfession").textContent = profession;
      document.getElementById("popupEmail").textContent = email;
      document.getElementById("popupMobile").textContent = mobile;
      popup.style.display = "block";
  });

  resetBtn.addEventListener("click", function() {
      surveyForm.reset();
  });

  closePopupBtn.addEventListener("click", function() {
      popup.style.display = "none";
      surveyForm.reset();
  });
});
