# chai-interface
chai assertions about an object's interface

## usage

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

Also, more complex, nested objects!

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

Also, use empty object or array literals:

    var foo = {
      bars: ['a', 'b', 'c'],
      megabars: {a: 1, b: 2}
    }

    foo.should.have.interface({
      bars: [],
      megabars: {}
    })

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
Copyright © 2013 Agile Diagnosis, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.