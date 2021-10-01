const httpException = require('../exception/http-exception');
const {
  getAllDogsService, saveDogService, updateDogService, getDogService, deleteDogService,
} = require('../services/dog.service');

const saveDogController = async (req, res) => {
  const { body } = req;
  try {
    await saveDogService(body);
    res.send('Cachorro cadastrado com sucesso!');
  } catch (err) {
    res.status(500).send({ message: 'Erro ao tentar salvar um cachorro', error: err });
  }
};

const getAllDogsController = async (req, res) => {
  const dogs = await getAllDogsService();
  res.json(dogs);
};

const getDogController = async (req, res) => {
  const { id } = req.params;
  const dog = await getDogService(id);
  res.json(dog);
};

const updateDogController = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await updateDogService(id, body);
    res.send('Cachorro alterado com sucesso!');
  } catch (err) {
    console.error(err);
    const error = httpException(err);
    res.status(error.status).json({ message: error.message });
  }
};

const deleteDogController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteDogService(id);
    res.send('Cachorro deletado com sucesso!');
  } catch (err) {
    res.status(500).send({ message: `Erro ao tentar deletar o cachorro com id: ${id}`, error: err });
  }
};

module.exports = {
  saveDogController,
  updateDogController,
  deleteDogController,
  getAllDogsController,
  getDogController,
};
