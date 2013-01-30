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

//Also, use empty object or array literals:

var foo = {
  bars: ['a', 'b', 'c'],
  megabars: {a: 1, b: 2}
}

foo.should.have.interface({
  bars: [],
  megabars: {}
})


console.log('okay!')