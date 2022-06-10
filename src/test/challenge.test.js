const challenges = require('../../challenges');

describe('Test Challenge to get Max Area', () => {
  test('Get an error message when the array has less than 2 elements', () => {
    const result = challenges.getMaxArea([1]);
    expect(result).toBe(`Field 'arreglo' must have at least 2 elements.`);
  })
  test('Receive a message when any element is not a number', () => {
    const result = challenges.getMaxArea([1, '2', 'asd']);
    expect(result).toBe(`Each element in the array must be a number.`);
  })
  test('Expected 1 from array  [1,1]', () => {
    const result = challenges.getMaxArea([1,1]);
    expect(result).toBe(1);
  })
  test('Expected 49 from array  [1,8,6,2,5,4,8,3,7]', () => {
    const result = challenges.getMaxArea([1,8,6,2,5,4,8,3,7]);
    expect(result).toBe(49);
  })
})