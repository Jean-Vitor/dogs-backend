const EXCEPTIONS = require('../constants/http-exception.constant');

const { INTERNAL_SERVER_ERROR } = EXCEPTIONS;

const httpException = (error) => {
  const newError = new Error();
  const { STATUS: objStatus, MESSAGE: objMessage, status: errorStatus } = error;
  const isError = error instanceof Error;

  if (isError && errorStatus) {
    return error;
  }

  if (objStatus && objMessage) {
    newError.status = objStatus;
    newError.message = objMessage;
    return newError;
  }

  newError.status = INTERNAL_SERVER_ERROR.STATUS;
  newError.message = INTERNAL_SERVER_ERROR.MESSAGE;
  return newError;
};

module.exports = httpException;
