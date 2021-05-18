import { useState, useEffect } from "react";
import axios from "axios";
import getArticlesByProject from "../helpers/library_selectors";

export default function useLibData() {
  const [state, setState] = useState({
    user: null,
    projects: [],
    articles: [],
    project: null,
    article: null,
    articleContent: null,
  });

  useEffect(() => {
    Promise.all([
      axios.get("/users"),
      axios.get("/projects"),
      axios.get("/articles"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        user: { ...all[0].data },
        projects: [...all[1].data],
        articles: [...all[2].data],
      }));
    });
  }, []);

  const selectArticle = function(id) {
    return axios.get(`/articles/${id}`).then((res) => {
      setState((prev) => ({
        ...prev,
        articleContent: res.data.content,
      }));
    });
  };

  const closeArticle = function() {
    setState({ ...state, article: null });
  };

  const selectProject = function(name) {
    const projectOption = state.projects.find(project => project.name === name);
    console.log(projectOption)
    setState(prev => ({
      ...prev,
      project: projectOption
    }))
  }

  const flagArticle = function(id) {
    const articleFind = state.articles.find(article => article.id === id);
    const flagStatus = articleFind.flagged;
    articleFind.flagged = !flagStatus

    const articlesCopy = [...state.articles];
    for (const article of articlesCopy) {
      if (article.id === id) {
        article.flagged = !flagStatus;
      }
    }

    return axios.put(`/articles/${id}`, articleFind )
    .then(res => {
      console.log(res.data.flagged);
      setState((prev) => ({
        ...prev,
        articles: [...articlesCopy]
      }));
    });
  };

  const moveArticle = function(id) {
    const articleFind = state.articles.find(article => article.id === id);
    articleFind.project = state.project.id;
    articleFind.project_id = state.project.id;

    const articlesCopy = [...state.articles];
    for (const article of articlesCopy) {
      if (article.id === id) {
        article.project = state.project.id;
        article.project_id = state.project.id;
      }
    }

    return axios.put(`/articles/${id}`, articleFind)
    .then(res => {
      console.log(res.data);
      setState((prev) => ({
        ...prev,
        articles: [...articlesCopy]
      }));
    });
  };

  const deleteArticle = function(id) {
    const articlesCopy = state.articles.filter(article => article.id !== id)
    setState((prev) => ({
      ...prev,
      articles: [...articlesCopy]
    }));
    return axios.delete(`/articles/${id}`);
  };

  return {
    state,
    selectArticle,
    selectProject,
    closeArticle,
    flagArticle,
    moveArticle,
    deleteArticle,
  };
}
