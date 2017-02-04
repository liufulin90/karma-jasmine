describe('测试基本函数', function () {
  it('测试test函数', function () {
    expect('abc').toEqual(test())
  })

  it('测试test2函数', function () {
    expect('test2').toEqual(test2())
  })

  it('测试test3函数', function () {
    expect('test3').toEqual(test3())
  })
})