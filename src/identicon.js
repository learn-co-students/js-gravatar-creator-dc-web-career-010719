class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  static handleSubmit(e){
    e.preventDefault()
    newIdent = document.querySelector("div.field input").value
    hashedArray = md5.array(newIdent)
    blockColor = `rgb(${hashedArray.slice(0, 3).join(', ')})`
  //  elem.style.backgroundColor = color;
    clearDOM()
    updateDOM()
  }
}
