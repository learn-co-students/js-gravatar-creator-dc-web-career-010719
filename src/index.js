function handleSubmit(e) {
  e.preventDefault()
  let input = e.target.querySelector('.field').children[0].value
  updateDOM(input)
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
