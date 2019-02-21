function updateDOM(id) {
  colorSquares(id)
}

const idSquares = document.querySelectorAll('span')

function createPositionGrid(identicon) {
  let positionGrid = {}
  const pattern = ["0-0", "1-0", "2-0", "3-0", "4-0",
                  "0-1", "1-1", "2-1", "3-1", "4-1",
                  "0-2", "1-2", "2-2", "3-2", "4-2"]
  const reflection = ["0-4", "1-4", "2-4", "3-4", "4-4",
                      "0-3", "1-3", "2-3", "3-3", "4-3"]

  pattern.forEach((key, i) => positionGrid[key] = identicon.getPositions()[i]);
  reflection.forEach((key, i) => positionGrid[key] = identicon.getPositions()[i]);
  return positionGrid
}

function getGridSquare(positionString) {
  return document.querySelector(`span#\\3${positionString} `)
}

function setColor(gridSquare, identicon) {
  gridSquare.style.backgroundColor = `rgb(${identicon.getColor()})`
}

function colorSquares(identicon) {
  let grid = createPositionGrid(identicon)
  for (const key in grid) {
    let square = getGridSquare(key)
    if (grid[key] === true) {
      setColor(square, identicon)
    }
  }
}

function resetIdenticon() {
  idSquares.forEach(square => square.style.backgroundColor = "rgb(240, 240, 240)")
}
