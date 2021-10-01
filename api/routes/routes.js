const express = require('express');

const router = express.Router();
const {
  saveDogController,
  getAllDogsController,
  getDogController,
  updateDogController,
  deleteDogController,
} = require('../controller/dog.controller');

router.route('/dogs')
  .post(saveDogController)
  .get(getAllDogsController);

router.route('/dogs/:id')
  .get(getDogController)
  .put(updateDogController)
  .delete(deleteDogController);

module.exports = router;
