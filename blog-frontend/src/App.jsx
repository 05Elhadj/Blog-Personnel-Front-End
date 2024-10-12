// App.jsx
import {Routes, Route } from 'react-router-dom'; // Assurez-vous que l'import est correct
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import ArticleForm from './pages/ArticleForm';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/articleform" element={<ArticleForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
