class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(input) {
    this.content = input
    this.md5 = md5.array(input)
    this.color = `rgb(${this.md5[0]}, ${this.md5[1]}, ${this.md5[2]}`
    this.layout = this.buildLayout(this.md5)
  }

  buildLayout(md5Array) {
    let arr = []
    for (let i = 0; i < 15; i++) {
      if (md5Array[i] % 2 === 0) {
        arr.push(true)
      }
      else {
        arr.push(false)
      }
    }
    return arr
  }



}
