function chaiInterface(chai, utils) {
  var Assertion = chai.Assertion;
  var assert = chai.assert;

  utils.addMethod(Assertion.prototype, 'interface', function(interfaceMap) {
    // map is an object map with property names as keys and strings for
    // typeof checks or a nested interfaceMap
    assert(typeof this._obj === 'object' || typeof this._obj === 'function', "object or function expected")

    assertInterface(this._obj, interfaceMap);

  })

  function assertInterface(obj, interfaceMap) {
    for (var prop in interfaceMap) {
      var type = interfaceMap[prop];
      var actualType = typeof obj[prop];

      if (type === Function) type = 'function';
      if (type === Boolean) type = 'boolean';
      if (type === Object) type = 'object';
      if (type === Number) type = 'number';
      if (type === String) type = 'string';

      if (typeof type === 'string') {
        assert(actualType === type,
              'expected ' + prop + ' to be typeof ' + type +', but was ' + actualType,
              'stop using this in the negative, it doesn\'t make sense')
      } else if (Array.isArray(type) || type === Array) {
        assert(Array.isArray(obj[prop]),
              'expected ' + prop + ' to be an array, but was ' + actualType,
              'negative'
          )
      } else if (typeof type === 'object'){
        assertInterface(obj[prop], type);
      } else {
        //console.warn('warning: skipping ' + prop + '. We don\t know how to check for ', type)
      }
    }
  }
}

module.exports = chaiInterface