var expect = require('chai').expect;

function titleCase(title) {
  var words = title.split(' ');
  var titleCaseWords = words.map(function(word){
    return word[0].toUpperCase() + word.substring(1);
  });
  return titleCaseWords.join(' ');
}

function subtraction (number1, number2) {
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    throw Error('subtraction only works with numbers!')
  }
  return number1 - number2
}

describe('test titleCase function', function(){
  it('should true to be true', function(){
    expect(true).to.be.true;
  });
  it('should return string', function(){
    expect(titleCase('simple string')).to.be.a('string');
  });
  it('should return letter in a upper case', function(){
    expect(titleCase('a')).to.equal('A');
  });
});

describe('subtraction', function () {
  it('only works with numbers', function () {
    var handler = function() {subtraction('asd', 2)};
    expect(handler).to.throw(Error);
    expect(handler).to.throw('subtraction only works with numbers!');
  })
})
expect(true).to.be.true;
expect(titleCase('simple string')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('simple')).to.equal('Simple');
expect(titleCase('simple string')).to.equal('Simple String');