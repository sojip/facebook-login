const handleSubmit = (e) => {
  e.preventDefault();
  let emailverified = verifyEmailOrTel();
  let passwordverified = verifyPassword();
  if (emailverified && passwordverified) {
    alert("Form Fields Validated");
    e.target.reset();
  }
};

const verifyEmailOrTel = () => {
  let email = document.querySelector("#email").value;
  let emailerror = document.querySelector(".email-error");
  if (email === "") {
    emailerror.textContent = "Please specify an email or a tel number";
    return false;
  }
  if (email.length <= 4) {
    emailerror.textContent = "Please, specify a correct value";
    return false;
  }
  return true;
};

const verifyPassword = () => {
  let password = document.querySelector("#password").value;
  let passworderror = document.querySelector(".password-error");
  if (password === "") {
    passworderror.textContent = "Please specify an email or a tel number";
    return false;
  }
  if (password.length < 6) {
    passworderror.textContent =
      "Please, the password should be 6 characters or more";
    return false;
  }
  return true;
};

const clearErrors = (e) => {
  let passworderror = document.querySelector(".password-error");
  let emailerror = document.querySelector(".email-error");
  passworderror.textContent = "";
  emailerror.textContent = "";
};

let form = document.querySelector("form");
let inputs = document.querySelectorAll(".datas");

inputs.forEach((input) => {
  input.addEventListener("input", clearErrors);
});
form.addEventListener("submit", handleSubmit);
