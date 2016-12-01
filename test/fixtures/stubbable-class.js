import stubbable from '../../src/'

@stubbable
class StubbableClass {
  constructor(prop) {
    this.prop = prop
  }
}

export default StubbableClass
