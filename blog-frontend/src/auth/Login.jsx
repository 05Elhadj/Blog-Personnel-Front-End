import React, { useState } from 'react';
import "./Login.css";


const Login = () => {
  const [formData, setFormData] = useState({
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
    login(formData).then(response => {
      alert("Connexion réussie !");
      
    }).catch(error => {
      alert("Erreur lors de la connexion");
    });
  };

  return (
    <div className="container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input type="text" name="username" onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input type="password" name="password" onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
