import { useState } from 'react';

const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField)
  const { displayName, email, password, confirmPassword } = formField;

  const handleChange = (event) => {
    const { name, value } = event;

    setFormField({...formField, [name]: value});

  }
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={()=>{}}>
        <label htmlFor="display-name">Display Name</label>
        <input 
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          id="display-name"
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          onChange={handleChange}
          name="email"
          value={displayName}
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input 
          type="text"
          onChange={handleChange}
          name="password"
          value={displayName}
          id="password"
        />
        <label htmlFor="confirm-password">Confirm password</label>
        <input 
          type="text"
          onChange={handleChange}
          name="confirmPassword"
          value={displayName}
          id="confirm-password"
        />
      </form>
    </div>
  )
}

export default SignUpForm;