const challenges = require('../../challenges');

// npx jest --testNamePattern getMaxArea
describe('Test Challenge to getMaxArea', () => {
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

// npx jest --testNamePattern equalizeTeamSize
describe('Test Challenge equalizeTeamSize', () => {
  test('Test case [1, 2, 3, 4, 5, 6, 7] & k=10 has to result 7', () => {
    const result = challenges.equalizeTeamSize([1, 2, 3, 4, 5, 6, 7], 10);
    expect(result).toBe(7)
  })
  test('Test case [1, 7, 3, 8] & k=1 has to result 7', () => {
    const result = challenges.equalizeTeamSize([1, 7, 3, 8], 1);
    expect(result).toBe(2)
  })
  test(`Test case if array's size is equals to k result has to be array's size`, () => {
    const result = challenges.equalizeTeamSize([1, 7, 3, 8], 4);
    expect(result).toBe(4)
  })
  test(`Test case if array's size is bigger than k result has to be array's size`, () => {
    const result = challenges.equalizeTeamSize([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
    expect(result).toBe(9)
  })
})