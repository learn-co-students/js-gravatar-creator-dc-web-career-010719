function updateDOM(emoji) {
    let color = emoji.colorCreate()
    let shaded = emoji.shadedArray
    let grid = document.getElementById("identicon").children
    let fullarray = emoji.createFull()
    for(let i = 1 ; i <= fullarray.length; i++){
      setGridElement(fullarray[i-1],getGridElement(i), color)
    }


}

function getGridElement(position){
  let count = 1
  for (let i = 0; i <= 4; i++) {
    for (let k = 0; k <= 4; k++) {
      if(position == count){
        return `${k}-${i}`
      }
      count +=1

    }
  }



}

function setGridElement(shaded, position, color){
  let el = document.getElementById(position)
  if(shaded){
    el.style.backgroundColor = `${color}`
  }else{
    el.style.backgroundColor = "white"
  }
  // debugger


}
