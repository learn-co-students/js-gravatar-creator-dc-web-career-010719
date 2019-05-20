function updateDOM() {
  let blocks = document.querySelectorAll("#identicon span")
  let i
  let col = 0
  let row = 0
  // debugger
  for (i = 0; i < 15; i++) {
    if (hashedArray[i] % 2 === 0) {
      console.log(col, row)
      if (row === 0) {
        document.getElementById(`${col}-${row}`).style.backgroundColor = blockColor
        document.getElementById(`${col}-${row + 4}`).style.backgroundColor = blockColor
      } else if (row === 1) {
        document.getElementById(`${col}-${row}`).style.backgroundColor = blockColor
        document.getElementById(`${col}-${row + 2}`).style.backgroundColor = blockColor
      } else if (row === 2) {
        document.getElementById(`${col}-${row}`).style.backgroundColor = blockColor
      }

    }
    row++
    if (row > 2) {
      col++
      row = 0
    }
    // if (i === 0 && hashedArray[i] % 2 === 0) {
    //   document.getElementById(`${i}-${i}`).style.backgroundColor = blockColor
    //   document.getElementById(`${i}-${i + 4}`).style.backgroundColor = blockColor
    // } else if (i === 1 && hashedArray[i] % 2 === 0) {
    //   document.getElementById(`${i}-${i}`).style.backgroundColor = blockColor
    //   document.getElementById(`${i}-${i + 2}`).style.backgroundColor = blockColor
    // } else if (hashedArray[i] % 2 === 0) {
    //   document.getElementById(`${i}-${i}`).style.backgroundColor = blockColor

    // }
  }
  

    blocks.forEach(b => {
      console.log(b.id)
    })
  
  // hashedArray.forEach((num, idx) => {
  //   debugger
  //   const block1 = blocks[idx]
  //   const block2 = blocks[(idx + 15)]
  //   console.log(num, idx, block1)
  //   if (num % 2 === 0) {
  //     block1.style.backgroundColor = blockColor
  //     block2.style.backgroundColor = blockColor
  //   }
  // })
}

function clearDOM() {
  const blocks = document.querySelectorAll("#identicon span")

  blocks.forEach(b => b.style.backgroundColor = '')

}
