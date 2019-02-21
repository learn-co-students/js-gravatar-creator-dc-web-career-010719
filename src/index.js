
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})

function handleSubmit(e) {
  e.preventDefault()
  resetIdenticon()
  let input = document.querySelector('input').value
  console.log(input)
  let id
  if (input != "") {
    id = new Identicon(input)
  updateDOM(id)
  } else {
    resetIdenticon()
  }
  this.reset()
}
