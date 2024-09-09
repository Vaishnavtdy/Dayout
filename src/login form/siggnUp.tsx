// SignupForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Make a request to your signup API endpoint
    try {
      const response = await fetch('http://your-api-server/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Assuming the server responds with a token
      const { token } = data;

      // Store the token securely (e.g., in a secure cookie or local storage)
      localStorage.setItem('token', token);

      // Optionally, you can redirect the user to another page
      // For example, using the react-router-dom library
      // history.push('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
