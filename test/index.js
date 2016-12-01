import tap from 'tap'

import StubbableClass from './fixtures/stubbable-class'
import stubbableFunction from './fixtures/stubbable-function'

//
// Class
//

tap.test('class decorated not stubbed', (test) => {
  const stubbableInstance = new StubbableClass('foo')

  test.equal(stubbableInstance instanceof StubbableClass.original, true)
  test.equal(stubbableInstance.constructor === StubbableClass.original, true)

  test.end()
})

tap.test('class decorated and stubbed', (test) => {
  class Stub {
    constructor (name) {
      this.name = name
    }
  }
  StubbableClass.stub = Stub
  const stubbableInstance = new StubbableClass('foo')

  test.equal(stubbableInstance.constructor, Stub)
  test.equal(stubbableInstance instanceof Stub, true)

  StubbableClass.stub = null
  test.end()
})

tap.test('class decorated, stubbed, and de-stubbed', (test) => {
  class Stub {
    constructor (name) {
      this.name = name
    }
  }
  StubbableClass.stub = Stub
  const stubbableInstance = new StubbableClass('foo')

  test.equal(stubbableInstance.constructor, Stub)
  test.equal(stubbableInstance instanceof Stub, true)

  StubbableClass.stub = null
  const stubbableInstance2 = new StubbableClass('foo')
  test.equal(stubbableInstance2 instanceof StubbableClass.original, true)

  test.end()
})

//
// Function
//

tap.test('function decorated not stubbed', (test) => {
  const result = stubbableFunction()

  test.equal(result, 123)

  test.end()
})

tap.test('function decorated and stubbed', (test) => {
  stubbableFunction.stub = () => 321
  const result = stubbableFunction()

  test.equal(result, 321)

  stubbableFunction.stub = null
  test.end()
})
