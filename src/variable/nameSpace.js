class Father {
  constructor() {
    this.age = 26
  }
  test() {
    console.log('继承父级的方法' + this.age)
  }
}
class Mango extends Father {
  constructor() {
    super()
    this.name = 'my name is mango'
  }
}

export default new Mango()