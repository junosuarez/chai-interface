var chai = require('chai')
chai.should()
chai.use(require('../index.js'))

var foo = {
  bar: true,
  baz: 'green',
  qux: 37,
  quack: function () {},
  ducks: [1, 2, 3]
}

foo.should.have.interface({
  bar: Boolean,
  baz: String,
  qux: Number,
  quack: Function,
  ducks: Array
})

//Also, more complex, nested objects!

var user = {
  name: {
    first: 'Betty',
    last: 'Dodson'
  },
  emails: {
    work: 'b.dodson@megacorp.com',
    home: 'butterflychica947@lol.com',
    school: 'bdodso4@stateu.edu'
  }
}

user.should.have.interface({
  name: {
    first: String,
    last: String
  },
  emails: {
    work: String,
    home: String,
    school: String
  }
})

//An example of failure output

var foo = {
  bars: ['a', 'b', 'c'],
  megabars: {a: 1, b: 2}
}

chai.expect(function () {

  foo.should.have.interface({
    bars: [Number],
    megabars: Object
  })

}).to.throw()
// throws:

// Interface not as expected:
// {
//   "bars": {
//     "actual": "Array<String>",
//     "expected": "Array<Number>",
//     "actualValue": [
//       "a",
//       "b",
//       "c"
//     ]
//   }
// }

console.log('okay!')