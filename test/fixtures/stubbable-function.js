import stubbable from '../../src/'

function stubbableFunction() {
  return 123
}

export default stubbable(stubbableFunction)
