function handleSubmit(e) {
  event.preventDefault()
  let text = e.target.querySelector(".field").children[0].value
  updateDOM(text)
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
