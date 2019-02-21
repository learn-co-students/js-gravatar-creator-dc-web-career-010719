function updateDOM(input) {
  let newIdent = new Identicon(input)
  // debugger

  let grid = document.querySelector('#identicon').children
  let nodes = [0, 1, 2, 5, 6, 7, 10, 11, 12, 15, 16, 17, 20, 21, 22]
  // debugger
  for (let i = 0; i < 15; i++) {
    // debugger
    if (newIdent.layout[i] === true) {
      grid[nodes[i]].style.backgroundColor = newIdent.color
    }
    else {
      grid[nodes[i]].style.backgroundColor = 'rgb(200,200,200)'
    }

  }

  grid[3].style.backgroundColor = grid[1].style.backgroundColor
  grid[4].style.backgroundColor = grid[0].style.backgroundColor
  grid[8].style.backgroundColor = grid[6].style.backgroundColor
  grid[9].style.backgroundColor = grid[5].style.backgroundColor
  grid[13].style.backgroundColor = grid[11].style.backgroundColor
  grid[14].style.backgroundColor = grid[10].style.backgroundColor
  grid[18].style.backgroundColor = grid[16].style.backgroundColor
  grid[19].style.backgroundColor = grid[15].style.backgroundColor
  grid[23].style.backgroundColor = grid[21].style.backgroundColor
  grid[24].style.backgroundColor = grid[20].style.backgroundColor

}
