import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

const defaultFormField = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormField)
  const { email, password, } = formField;

  const resetFormField = () => setFormField(defaultFormField);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(res);
      resetFormField();
    } catch(error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormField({...formField, [name]: value});

  }
  return (
    <div>
      <h2>Already have an account</h2>
      <form onSubmit={handleLogin}>
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
        <div className="buttons-container">
          <Button
            type="submit"
            buttonType={"inverted"}
            children="Sign In"
          ></Button>
          <Button
            onclick={signInWithGooglePopup}
            buttonType="google"
            children="Sign In with Google"
          ></Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;