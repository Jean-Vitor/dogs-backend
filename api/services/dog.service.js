const {
  deleteDogRepository,
  getAllDogsRepository,
  getDogRepository,
  saveDogRepository,
  updateDogRepository,
} = require('../repository/dog.repository');
const httpException = require('../exception/http-exception');
const EXCEPTIONS = require('../constants/http-exception.constant');

const { NOT_FOUND } = EXCEPTIONS;

const saveDogService = async (dog) => {
  const response = await saveDogRepository(dog);
  console.log(response);
  return response;
};

const getAllDogsService = () => getAllDogsRepository();

const getDogService = async (id) => {
  const response = await getDogRepository(id);
  if (!response.matchedCount) throw httpException(NOT_FOUND);
  return response;
};

const updateDogService = async (id, dog) => {
  const { matchedCount } = await updateDogRepository(id, dog);
  if (!matchedCount) throw httpException(NOT_FOUND);
};

const deleteDogService = async (id) => {
  const { matchedCount } = await deleteDogRepository(id);
  if (!matchedCount) throw httpException(NOT_FOUND);
};

module.exports = {
  getDogService,
  getAllDogsService,
  saveDogService,
  deleteDogService,
  updateDogService,
};
