const challenges = require('../../challenges');

const getMaxAreaController = (req, res) => {
  const { arreglo } = req.body;
  const maxArea = challenges.getMaxArea(arreglo);
  res.json(maxArea);
}

const equalizeTeamSize = (req, res) => {
  const { arreglo, k } = req.body;
  res.json(challenges.equalizeTeamSize(arreglo, k));
}

module.exports = {
  getMaxAreaController,
  equalizeTeamSize,
}