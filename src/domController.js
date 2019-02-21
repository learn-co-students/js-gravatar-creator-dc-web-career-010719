function updateDOM(text) {
  let hashedArr = md5.array(text);
  let i = new Identicon(hashedArr); // ReferenceError
  let nodes = Array.from(document.querySelectorAll("span"))

  let identiconArray = [i.one,i.two,i.three,i.four,i.five,i.six,i.seven,
    i.eight,i.nine,i.ten,i.eleven,i.twelve,i.thirteen,i.fourteen,i.fifteen,
    i.sixteen,i.seventeen,i.eighteen,i.nineteen,i.twenty,i.twentyone,
    i.twentytwo,i.twentythree,i.twentyfour]

    for (let n = 0; n < nodes.length; n++) {
      nodes[n].style.backgroundColor = rgbPicker(identiconArray[n])
    }

    function rgbPicker(number) {
      if (number % 2 == 0) {
        return i.blockColor
      } else if (number % 2 != 0) {
        return "rgb(220,220,220)"
      }
    }
  }
