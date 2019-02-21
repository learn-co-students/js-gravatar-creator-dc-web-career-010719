class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  // parses input and sets identicon equal to stuff

  constructor(hashedArr) {
    this.blockColor = `rgb(${parseInt(hashedArr[13])},${parseInt(hashedArr[14])},${parseInt(hashedArr[15])})`
    this.one = parseInt(hashedArr[0])
    this.two = parseInt(hashedArr[1])
    this.three = parseInt(hashedArr[2])
    this.four = parseInt(hashedArr[1])
    this.five = parseInt(hashedArr[0])
    this.six = parseInt(hashedArr[3])
    this.seven = parseInt(hashedArr[4])
    this.eight = parseInt(hashedArr[5])
    this.nine = parseInt(hashedArr[4])
    this.ten = parseInt(hashedArr[3])
    this.eleven = parseInt(hashedArr[6])
    this.twelve = parseInt(hashedArr[7])
    this.thirteen = parseInt(hashedArr[8])
    this.fourteen = parseInt(hashedArr[7])
    this.fifteen = parseInt(hashedArr[6])
    this.sixteen = parseInt(hashedArr[9])
    this.seventeen = parseInt(hashedArr[10])
    this.eighteen = parseInt(hashedArr[11])
    this.nineteen = parseInt(hashedArr[10])
    this.twenty = parseInt(hashedArr[9])
    this.twentyone = parseInt(hashedArr[12])
    this.twentytwo = parseInt(hashedArr[13])
    this.twentythree = parseInt(hashedArr[14])
    this.twentyfour = parseInt(hashedArr[13])
    this.twentyfive = parseInt(hashedArr[12])
 }

}
