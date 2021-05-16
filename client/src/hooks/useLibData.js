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

  const selectArticle = function (id) {
    return axios.get(`/articles/${id}`).then((res) => {
      setState((prev) => ({
        ...prev,
        articleContent: res.data.content,
      }));
    });
  };

  const closeArticle = function () {
    setState({ ...state, article: null });
  };

  const flagArticle = function (id) {
    const flagStatus = state.articles[id].flagged;
    console.log("flagStatus", flagStatus);
    console.log("!flagStatus", !flagStatus);

    const flagged = {
      ...state.articles[id],
      flagged: !flagStatus,
    };

    console.log("flagged", flagged)

    // const articles = [...state.articles];
  
    const updateFlag = (articles) =>{
      for (let article of articles) {
        if (article.id === id){
          article = flagged
        }
      }
      return articles
    }
console.log(updateFlag(state.articles))
      // return x;
    
    // console.log("will this work?", flagThis);
    // console.log("state from useLibData", state)
    // console.log("state.articles[id]", state.articles[id]);
    // console.log("artucle state from useLibData 51", state.article)
    console.log("id from useLibData 52", id);

    return axios.put(`/articles/${id}`, flagged )
    .then((res) => {
      console.log("flagged!!");
      console.log("res.data.flagged", res.data.flagged);
      console.log("res.data", res.data)
      const updatedArticles = updateFlag(state.articles)
      setState((prev) => ({
        ...prev,
        articles: updatedArticles,

      }));
      console.log("state from line 71", state.articles[id]);
    });
  };

  const moveArticle = function (article_id, project_id) {
    const articleCopy = {
      ...state.article,
      project: project_id,
    };
    return axios.put(`/articles/${article_id}`, articleCopy);
  };

  const deleteArticle = function (id) {
    setState((prev) => ({
      ...prev,
      article: null,
    }));
    return axios.delete(`/articles/${id}`);
  };

  return {
    state,
    selectArticle,
    closeArticle,
    flagArticle,
    moveArticle,
    deleteArticle,
  };
}
