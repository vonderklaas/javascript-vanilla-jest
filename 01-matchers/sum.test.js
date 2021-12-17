const sum = require('./sum');

// Group of tests
describe('sum function checking', () => {

  it('should add 1 + 2 to be 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  })

  it('should check two empty objects', () => {
    const obj = {};
    expect(obj).toEqual({});
  })

})

describe('truthy or falsey', () => {

  it('should be null', () => {
    const n = null;
    expect(n).toBeFalsy()
    expect(n).not.toBeTruthy()
  })

})

describe('numbers', () => {

  it('2 + 2', () => {
    const value = 2 + 2;
    expect(value).toBe(4)
    expect(value).toBeGreaterThan(3)
  })

  it('adding floats', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
  })

})

describe('strings', () => {

  it('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
  })

})

describe('arrays', () => {
  const shoppingLists = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'];

  it('should have milk', () => {
    expect(shoppingLists).toContain('milk')
  })

})

function compileAndroidCode () {
  throw new Error('Something went wrong!')
}

describe('exceptions', () => {

  it('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow('Something went wrong!')
  })

})