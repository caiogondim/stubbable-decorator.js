import stubbable from '../../src/'

// eslint-disable-next-line
@stubbable
class StubbableClass {
  constructor (prop) {
    this.prop = prop
  }
}

export default StubbableClass
