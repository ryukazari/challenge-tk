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
  const len = arr.length - 1;
  return sortedArr.reduce((curr, val) => {
    if(!highers) {
      highers=[val];
      return curr;
    }
    if(len * val.value > curr) {
      for(let i = 0; i<highers.length; i++){
        const width = Math.abs(val.index - highers[i].index);
        auxCurr = val.value * width;
        console.log('auxCurr: ', auxCurr);
        console.log('curr: ', curr);
        if(auxCurr > curr) curr = auxCurr;
      }
    }
    highers.push(val);
    return curr;
  }, 0)
}

const getQtyMinArray = (array, k=0) => {
	const arr = array.sort().reverse();
	const pairValue = {};
  let max = 0;
  let valueMax = 0;
  for(let i= k===0 ? 0 : k; i<array.length; i++){
    const value = arr[i]
  	pairValue[value] = pairValue[value] ? pairValue[value]+1 : 1
    if(max < pairValue[value]){
    	max = pairValue[value];
      valueMax = value
    }
  }
  if(k !== 0){
  	return pairValue[valueMax] + k
  }
  return pairValue[valueMax];
}

const equalizeTeamSize = (array, k) => {
	const size = array.length;
	if(k>=size) return size;
  return getQtyMinArray(array, k);
}

module.exports = {
  getMaxArea,
  equalizeTeamSize
}