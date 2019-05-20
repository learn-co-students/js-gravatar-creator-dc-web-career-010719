let newIdent
let hashedArray
let blockColor 

function handleSubmit(e) {
  e.preventDefault()
  newIdent = document.querySelector("div.field input").value
  hashedArray = md5.array('')
  hashedArray = md5.array(newIdent)
  
  blockColor = `rgb(${hashedArray.slice(0, 3).join(', ')})`
//  elem.style.backgroundColor = color;
  clearDOM()
  updateDOM()
}

function drawIcon() {
  let blocks = document.querySelectorAll("#identicon span")
//  blocks.forEach(block => {
//    
//  })
  
  hashedArray.forEach((num, idx) => {
    const block1 = blocks[idx]
    const block2 = blocks[(idx + 15)]
    console.log(num, idx, block1)
    if (num % 2 === 0) {
      block1.style.backgroundColor = blockColor
      block2.style.backgroundColor = blockColor
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", Identicon.handleSubmit)
})
