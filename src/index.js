function handleSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type=text]');
  createIdenticon(input.value)
}

function createIdenticon(name) {
  return new Identicon(name);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
});