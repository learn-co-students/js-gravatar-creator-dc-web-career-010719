class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(str) {
    this.str = str;
    this.hash = md5.array(str);
    this.color = this.hash

    let newArray = []
    this.hash.forEach((x) => {newArray.push(shadeOrNot(x))})
    this.shadedArray = newArray

  }

  colorCreate(){
      return `rgb(${this.color[0]},${this.color[1]},${this.color[2]})`
  }

  createFull(){
    let newArray = []
    let firstHalf = this.shadedArray.slice(0,10)
    let middle = this.shadedArray.slice(10,15)
    let lastHalf = firstHalf.slice(5,10).concat(firstHalf.slice(0,5))
    newArray = firstHalf.concat(middle);
    newArray = newArray.concat(lastHalf);

    return newArray

  }

}
function shadeOrNot(num){
  return (num %2 == 0)
}
