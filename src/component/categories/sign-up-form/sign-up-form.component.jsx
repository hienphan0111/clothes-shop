import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../../utils/firebase/firebase.utils';
import FormInput from '../../form-input/form-input.component';
import Button from '../../button/button.component';

const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField)
  const { displayName, email, password, confirmPassword } = formField;

  const resetFormField = () => setFormField(defaultFormField);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword) {
      alert('wrong password');
      return;
    }

    try {
      const res = await createAuthUserWithEmailAndPassword(email, password);
      console.log(res);
      createUserDocumentFromAuth(res.user, { displayName });
      resetFormField();
    } catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Email existed, can not create new user from this email');
      } else {
        console.log('user createion encountered an error', error);
      }
    } 
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormField({...formField, [name]: value});

  }
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          id="display-name"
          required
        />
        <FormInput 
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          id="email"
          required
        />
        <FormInput
          label="Password"
          type="text"
          onChange={handleChange}
          name="password"
          value={password}
          id="password"
          required
        />
        <FormInput
          label="Confirm password"
          type="text"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          id="confirm-password"
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;