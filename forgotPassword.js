
document.getElementsByTagName("form")[0].addEventListener("submit", () => {
  const userEmail = document.getElementsByName("userEmail")[0].value
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (!emailRegex.text(userEmail)) {
    alert("Incorrect email format")
    event.preventDefault()
  }
})