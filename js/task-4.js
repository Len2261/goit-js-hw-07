const login = document.querySelector(".login-form");

login.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = login.elements.email.value.trim();
  const password = login.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const user = {
      email: email,
      password: password,
    };
    console.log(user);
  }

  login.reset();
});
