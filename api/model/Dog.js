const mongoose = require('mongoose');

const { Schema } = mongoose;

const DogSchema = new Schema({
  name: String,
  breed: String,
  color: String,
  age: Number,
});

const Dog = mongoose.model('Dog', DogSchema);

module.exports = Dog;
