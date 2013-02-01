# chai-interface
chai assertions about an object's interface

## installation

    $ npm install chai-interface

## usage
```js
    var chai = require('chai')
    chai.should()
    chai.use(require('chai-interface'))

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
```
Also, more complex, nested objects!
```js
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
```
Also, use empty object or array literals:
```js
    var foo = {
      bars: ['a', 'b', 'c'],
      megabars: {a: 1, b: 2}
    }

    foo.should.have.interface({
      bars: [],
      megabars: {}
    })
```
## known limitations

Currently, there is no support for asserting RegExps, Dates, instanceofs, or
other range limitations declaritively. I've found `chai`'s built-in assertion
methods to be best for these more complex use cases.

If this functionality would be useful to you, please submit a pull request.

## contributors

jden <jason@denizac.org> @leJDen

Please submit pull requests and issues through github.

## license

MIT
(c) 2013 Agile Diagnosis, Inc.
see LICENSE.md