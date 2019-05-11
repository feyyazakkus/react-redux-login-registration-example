import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { REQUIRED } from "./messages";

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = REQUIRED;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = REQUIRED;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
