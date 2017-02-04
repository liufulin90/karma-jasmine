describe('测试基本函数', function () {
  it('测试test函数', function () {
    expect('abc').toEqual(test())
  })
  it('测试test4函数', function () {
    expect(333).toEqual(test4())
  })

  it('测试reverse', function () {
    var str = 'AAA';
    expect('BBB').toBe(reverse(str))
  })
  it('测试reverse', function () {
    var str = 'dcba';
    expect('abcd').toBe(reverse(str))
  })

  it('测试test2函数', function () {
    expect('test2').toEqual(test2())
  })
  // it('测试test22函数', function () {
  //   expect('test2').toEqual(test22())
  // })

  it('测试test3函数', function () {
    expect('ccc').toEqual(test3())
  })
})

describe('异常测试', function () {
  it("The 'toThrowError' matcher is for testing a specific thrown exception", function() {
    var foo = function() {
      throw new TypeError("foo bar baz");
    };

    expect(foo).toThrowError("foo bar baz");
    expect(foo).toThrowError(/bar/);
    expect(foo).toThrowError(TypeError);
    expect(foo).toThrowError(TypeError, "foo bar baz");
  });
})