function handleSubmit(e) {
  // procedural approach to a solution, try OOJS next!
  e.preventDefault()

  // resets tiles to gray
  let color = [240, 240, 240]
  function setColor (element, color) {
    element.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
  }

  for (let i = 0; i < 5; i++ ) {
    let col = document.getElementById(`${i}-${0}`)
    let mirror = document.getElementById(`${i}-${4}`)
    setColor(col, color)
    setColor(mirror, color)
  }
  for (let i = 5; i < 10; i++ ) {
    col = document.getElementById(`${i-5}-${1}`)
    mirror = document.getElementById(`${i-5}-${3}`)
    setColor(col, color)
    setColor(mirror, color)
  }
  for (let i = 10; i < 15; i++ ) {
    col = document.getElementById(`${i-10}-${2}`)
    setColor(col, color)
  }

  // turns input into hash and assigns first three values of the hash array as color values
  let strValue = document.querySelector('input').value

  const hashedArr = md5.array(strValue)
  color[0] = hashedArr[0]
  color[1] = hashedArr[1]
  color[2] = hashedArr[2]

  // selects and changes color of tiles
  for (let i = 0; i < (hashedArr.length - 11); i++ ) {
    if (hashedArr[i] % 2 === 0) {
      col = document.getElementById(`${i}-${0}`)
      mirror = document.getElementById(`${i}-${4}`)
      setColor(col, color)
      setColor(mirror, color)
    }
  }
  for (let i = 5; i < (hashedArr.length - 6); i++ ) {
    if (hashedArr[i] % 2 === 0) {
      col = document.getElementById(`${i-5}-${1}`)
      mirror = document.getElementById(`${i-5}-${3}`)
      setColor(col, color)
      setColor(mirror, color)
    }
  }
  for (let i = 10; i < (hashedArr.length - 1); i++ ) {
    if (hashedArr[i] % 2 === 0) {
      col = document.getElementById(`${i-10}-${2}`)
      setColor(col, color)
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
