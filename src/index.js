function handleSubmit(e) {
  e.preventDefault()
  let input = e.target.elements[0].value
  let emoji = new Identicon(input)
  updateDOM(emoji)
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})


//3, 8, 13, 18, 23
