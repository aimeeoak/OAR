import { useState, useEffect } from "react";
import axios from "axios";

export default function useLibData() {

  const [state, setState] = useState({
    user: null,
    projects: [],
    articles: [],
    project: null,
    article: null,
    articleContent: null
  })
  
  useEffect(() => {
    Promise.all([
      axios.get('/users'),
      axios.get('/projects'),
      axios.get('/articles')
    ])
    .then(all => {
      setState(prev => (
        { 
          ...prev, 
          user: {...all[0].data},
          projects: [...all[1].data], 
          articles: [...all[2].data]
        }));
      })
  }, []);

  const selectArticle = function(id) {
    return axios.get(`/articles/${id}`)
    .then(res => {
      setState(prev => ({
        ...prev,
        articleContent: res.data.content
      }))
  })};

  const closeArticle = function() {
    setState({ ...state, article: null })
  }

  const flagArticle = function(id) {
    const flagStatus = state.article.flagged;
    const articleCopy = {
      ...state.article,
      flagged: !flagStatus
    };
    return axios.put(`/articles/${id}`, articleCopy);
  }

  const moveArticle = function(article_id, project_id) {
    const articleCopy = {
      ...state.article,
      project: project_id
    };
    return axios.put(`/articles/${article_id}`, articleCopy);
  }

  const deleteArticle = function(id) {
    setState(prev => ({
      ...prev,
      article: null
    }))
    return axios.delete(`/articles/${id}`)
  }

  return { state, selectArticle, closeArticle, flagArticle, moveArticle, deleteArticle }
}