import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import { REQUIRED } from "./messages";

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = REQUIRED;
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = REQUIRED;
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = REQUIRED;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = REQUIRED;
  }

  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = REQUIRED;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
