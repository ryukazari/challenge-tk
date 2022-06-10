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
  let highers = [];
  return sortedArr.reduce((curr, val) => {
    if(!highers) {
      highers=[val];
      return curr;
    }
    for(let i = 0; i<highers.length; i++){
      const minHigh = Math.min(val.value, highers[i].value);
      const width = Math.abs(val.index - highers[i].index);
      auxCurr = minHigh * width;
      if(auxCurr > curr) curr = auxCurr;
    }
    highers.push(val);
    return curr;
  }, 0)
}

module.exports = {
  getMaxArea,
}