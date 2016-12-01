<img src="http://rawgit.com/caiogondim/stubbable-decorator.js/master/docs/icon/icon.svg">

<h1 align="center">stubbable-decorator.js</h1>

<div align="center">
<img src="http://travis-ci.org/caiogondim/stubbable-decorator.js.svg?branch=master" alt="Travis CI"> <img src="https://david-dm.org/caiogondim/stubbable-decorator.js/status.svg" alt="dependencies status"> <img src="https://img.shields.io/npm/v/@caiogondim/stubbable-decorator.svg" alt="npm version">
</div>

<br>

A decorator to make possible to stub modules in ECMAScript 2015+.

## Installation

```
npm install -S @caiogondim/stubbable-decorator
```

## Usage

### With a class

```js
//
// Module declaration
//

import stubbable from 'stubbable-decorator'

class Foo {
  constructor(bar) {
    this.bar = bar
  }
}

export default stubbable(Foo)

// ---

//
// Testing
//

Foo.stub = sinon.stub().returns({})
const obj = new Foo()
expect(VHS.api.Poller.stub).calledOnce // 👍
```

### With a function

```js
//
// Module declaration
//

import stubbable from 'stubbable-decorator'

function foo() { return 123 }

export default stubbable(foo)

// ---

//
// Testing
//

foo.stub = sinon.stub().returns(321)
const result = foo()
expect(result).to.be.equal(321) // 👍
```

### With a decorator

In the current spec it is only possible to decorate classes and classes
properties.

```js
//
// Module declaration
//

import stubbable from 'stubbable-decorator'

@stubbable
class Foo {
  constructor(bar) {
    this.bar = bar
  }
}

export default Foo

// ---

//
// Testing
//

Foo.stub = sinon.stub().returns({})
const obj = new Foo()
expect(VHS.api.Poller.stub).calledOnce // 👍
```

## Credits
- Icon by Sergey Demushkin from The Noun Project
