import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data) {
	let errors = {};

  if (Validator.isNull(data.username)) {
    errors.username = 'This field is required';
  }
  if (Validator.isNull(data.password)) {
    errors.password = 'Password is required';
  }
  if (Validator.isNull(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Password confirmation is required';
  }
  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

router.post('/', (req, res) => {
  setTimeout(() => {
    const { errors, isValid } = validateInput(req.body);

    if (!isValid) {
      res.status(400).json(errors);
    }
  }, 5000);
});

export default router;