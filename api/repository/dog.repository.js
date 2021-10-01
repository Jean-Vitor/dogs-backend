const Dog = require('../model/Dog');

const saveDogRepository = (dog) => Dog.create(dog);

const getAllDogsRepository = () => Dog.find();

const getDogRepository = (id) => Dog.findById(id, { runValidators: true });

const deleteDogRepository = (id) => Dog.deleteOne({ _id: id }, { runValidators: true });

const updateDogRepository = (id, dog) => Dog.updateOne({ _id: id }, { ...dog });

module.exports = {
  saveDogRepository,
  getAllDogsRepository,
  getDogRepository,
  deleteDogRepository,
  updateDogRepository,
};
