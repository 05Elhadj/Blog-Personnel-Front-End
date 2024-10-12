import axios from 'axios';

const API_URL = "http://localhost:8080/api";

export const SignUp = (userData) => {
  return axios.post(`${API_URL}/auth/SignUp`, userData);
};

export const Login = (userData) => {
  return axios.post(`${API_URL}/auth/Login`, userData);
};

export const getArticles = (userId) => {
  return axios.get(`${API_URL}/articles/${userId}`);
};

export const createArticle = (articleData) => {
  return axios.post(`${API_URL}/articles/create`, articleData);
};
