import React, { useState } from 'react';
import "./ArticleForm.css";

const ArticleForm = () => {
  const [articleData, setArticleData] = useState({
    title: '',
    content: '',
    isPublic: false
  });

  const handleChange = (e) => {
    setArticleData({
      ...articleData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = 1; 
    createArticle({ ...articleData, userId }).then(response => {
      alert("Article créé !");
    }).catch(error => {
      alert("Erreur lors de la création de l'article");
    });
  };

  return (
    <div className="container">
      <h2>Créer un nouvel article</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Titre</label>
          <input type="text" name="title" onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Contenu</label>
          <textarea name="content" onChange={handleChange} className="form-control"></textarea>
        </div>
        <div className="form-group">
          <label>Rendre public</label>
          <input type="checkbox" name="isPublic" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Créer</button>
      </form>
    </div>
  );
};

export default ArticleForm;
