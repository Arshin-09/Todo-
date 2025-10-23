import { useState } from "react";
import './Form.css';
const Form = ({ onSubmit }) => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    if (username.trim() !== '' && email.trim() !== '') {
      onSubmit({ username, email });  // 👈 App.jsx ko data bhej raha hai
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <>
      <form onSubmit={handleForm} className="form-container">
        <div className="form">
          <h1>Create An Account</h1>
        <input
          type="text"
          value={username}
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
          required
        /><br></br>
        <input
          type="email"
          value={email}
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br></br>
        <button type="submit">Create Account</button> 
        </div>
      </form>
    </>
  );
};

export default Form;
