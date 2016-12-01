const stubbable = (target, property, descriptor) => {
  function facade (...args) {
    if (typeof target !== 'function') {
      throw new Error('Can only stub functions or classes')
    }

    if (this instanceof facade) {
      if (facade.stub) {
        // eslint-disable-next-line new-cap
        return new facade.stub(...args)
      } else {
        // eslint-disable-next-line new-cap
        return new target(...args)
      }
    } else {
      if (facade.stub) {
        return facade.stub(...args)
      } else {
        return target(...args)
      }
    }
  }

  facade.stub = target
  facade.original = target

  return facade
}

export default stubbable
