let allIdenticons = []

function createIdenticon() {
  let IdenticonID = 0
  return class {
    constructor(stringValue) {
      console.log('creating identicon')
      this.stringValue = stringValue
      this.id = ++IdenticonID
      allIdenticons.push(this)
    }

    createHash() {
      return md5.array(this.stringValue)
    }

    getColor() {
      return this.createHash().slice(0,3)
    }

    getPositions() {
      let positionArr = (this.createHash().slice(1)).map(function(num) {
        if (num % 2 === 0) {
          return true
        } else {
          return false
        }
      })
      return positionArr
    }
  }
}

const Identicon = createIdenticon()
