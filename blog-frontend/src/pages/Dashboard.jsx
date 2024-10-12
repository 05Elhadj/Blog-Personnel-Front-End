import React, { useEffect, useState } from 'react';
import "./Dashboard.css";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const userId = 1;
    getArticles(userId).then(response => {
      setArticles(response.data);
    }).catch(error => {
      alert("Erreur lors du chargement des articles");
    });
  }, []);

  return (
    <div className="container">
      <h2>Tableau de bord</h2>
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
