
document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
  const userName = document.getElementsByName("userName")[0].value
  const userPassword = document.getElementsByName("userPassword")[0].value

  if(userName === "" || userPassword == "") {
    alert("Don't leave blank inputs")
    event.preventDefault()
  }
})