import React, { useState } from 'react';
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(formData).then(response => {
      alert("Inscription réussie !");
    }).catch(error => {
      alert("Erreur lors de l'inscription");
    });
  };

  return (
    <div className="container">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom Complet</label>
          <input type="text" name="fullName" onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input type="text" name="username" onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input type="password" name="password" onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">S'inscrire</button>
      </form>
    </div>
  );
};

export default SignUp;
