

const userNameRegex = /^[a-zA-Z0-9]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

document.getElementsByTagName("form")[0].addEventListener("submit", function(event) {
  const userName = document.getElementsByName("userName")[0].value;
  const userEmail = document.getElementsByName("userEmail")[0].value;
  const userPassword1 = document.getElementsByName("userPassword1")[0].value;
  const userPassword2 = document.getElementsByName("userPassword2")[0].value;
  
  if (!userNameRegex.test(userName)) {
    alert("Username format incorrect.");
    event.preventDefault(); 
  }

  if (!emailRegex.test(userEmail)) {
    alert("Invalid email address.");
    event.preventDefault(); 
  }

  if (!passwordRegex.test(userPassword1)) {
    alert("Password format incorrect.");
    event.preventDefault(); 
  }

  if (userPassword1 !== userPassword2) {
    alert("Passwords do not match.");
    event.preventDefault(); 
  }
});