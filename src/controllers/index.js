const challenges = require('../../challenges');

const getMaxAreaController = (req, res) => {
  const { arreglo } = req.body;
  const maxArea = challenges.getMaxArea(arreglo);
  res.json(maxArea);
}

module.exports = {
  getMaxAreaController
}