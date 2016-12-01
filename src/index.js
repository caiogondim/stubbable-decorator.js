const stubbable = (target, property, descriptor) => {
  function facade(...args) {
    if (typeof target !== 'function') {
      throw new Error('Can only stub functions or classes')
    }

    if (this instanceof facade) {
      return new facade.stub(...args)
    } else {
      return facade.stub(...args)
    }
  }

  facade.stub = target
  facade.original = target

  return facade
}

export default stubbable
