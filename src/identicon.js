class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html

  constructor(name) {
    this.name = name;
    this.hashList = md5.array(name);
  }
}
