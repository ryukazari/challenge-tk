const validateArray = (arr) => arr.every((e)=>!isNaN(e));
const getMaxArea = (arr) => {
  if(arr.length <= 1) return `Field 'arreglo' must have at least 2 elements.`;
  if(!validateArray(arr)){
    return `Each element in the array must be a number.`
  }
  const sortedArr = arr.map((e, index) => {
    return {
      value: e,
      index,
    }
  }).sort((a,b) => b.value - a.value)
  let lastHigher = null;
  return sortedArr.reduce((curr, val) => {
    if(!lastHigher) {
      lastHigher = val;
      return curr;
    }
    const minHigh = Math.min(val.value, lastHigher.value);
    const width = Math.abs(val.index - lastHigher.index);
    auxCurr = minHigh * width;
    if(auxCurr > curr) curr = auxCurr;
    return curr;
  }, 0)
}

module.exports = {
  getMaxArea,
}