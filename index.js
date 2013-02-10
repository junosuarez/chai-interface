var tracery = require('tracery')
var diff = require('tracery/diff')

function chaiInterface(chai, utils) {
  var Assertion = chai.Assertion;
  var assert = chai.assert;

  utils.addMethod(Assertion.prototype, 'interface', function(interfaceMap) {
    // map is an object map with property names as keys and strings for
    // typeof checks or a nested interfaceMap
    assert(typeof this._obj === 'object' || typeof this._obj === 'function', "object or function expected")

    var hasInterface = tracery(interfaceMap)
    assert(
      hasInterface(this._obj),
      format(diff(interfaceMap, this._obj))
      )
  })

}

function format (diff) {
  var str = 'Interface not as expected:\n'
  // pretty print json
  str += JSON.stringify(diff, null, 2)
  return str;
}

module.exports = chaiInterface