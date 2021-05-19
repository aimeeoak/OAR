import dotenv from 'dotenv';

import { useState, useEffect } from "react";
import axios from "axios";

import SerpApi from 'google-search-results-nodejs'

dotenv.config();

export default function useAppData() {

  const [state, setState] = useState({
    user: null,
    articles: [],
    results: [],
    resultsToSave: [],
    project: null,
    projects: [],
    projectsToSaveTo: [],
    searchQuery: null,
    subject: {
      math: true,
      nautical_stuff: true
    },
    language: {
      english: true,
      french: true
    },
    sourceAPI: {
      serpAPI: true,
      coreAPI: true
    },
    sourceType: {
      journal: true,
      book: true
    },
    startDate: {
      month: "Jan",
      day: "01",
      year: "1900"
    },
    endDate: {
      month: "May",
      day: "20",
      year: "2021"
    },
    tags: ["Nerd Stuff", "Cool Stuff"],
    tagsToAdd: []
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

  const callSearchAPI = function() {
    const coolAPIKey = process.env.REACT_APP_SERP_API
    const search = new SerpApi.GoogleSearch(coolAPIKey)
    const params = {
      engine: "google_scholar",
      q: state.searchQuery
    };
    const callback = (data) => {
      const organicResults = data["organic_results"];
      const gmoResults = organicResults.filter((x) =>  x.resources ? x : null)
      setState(prev => ({
        ...prev,
        results: [ ...gmoResults ]
      }))
    };
    search.json(params, callback)
  }

  const selectArticleForSaving = function(title) {
    const article = state.results.find(result => result.title === title)
    if (state.resultsToSave.length === 0) {
      setState(prev => ({
        ...prev,
        resultsToSave: [ article ]
      }))
    }

    const checkForItem = state.resultsToSave.find(result => result.title === title)
    if (!checkForItem) {
      const resultsSave = [ ...state.resultsToSave, article ]
      setState(prev => ({
        ...prev,
        resultsToSave: [ ...resultsSave ]
      }))
    } else {
      const newSaveList = state.resultsToSave.filter(result => (!result.title === title))
      setState(prev => ({
        ...prev,
        resultsToSave: [ ...newSaveList ]
      }))
    }
  }

  const selectProjectsToSaveTo = function(project_id) {
    const project = state.projects.find(project => project.id === project_id)
    if (state.projectsToSaveTo.length === 0) {
      setState(prev => ({
        ...prev,
        projectsToSaveTo: [ project ]
      }))
      return project_id;
    }
    const checkForItem = state.projectsToSaveTo.find(project => project.id === project_id)
    if (!checkForItem) {
      const projectsSave = [ ...state.projectsToSaveTo, project ]
      setState(prev => ({
        ...prev,
        projectsToSaveTo: [ ...projectsSave ]
      }))
    } else {
      const newSaveList = state.projectsToSaveTo.filter(project => project.id !== project_id)
      setState(prev => ({
        ...prev,
        projectsToSaveTo: [ ...newSaveList ]
      }))
    }
  }

  const selectTagsToAdd = function(tag) {
    if (state.tagsToAdd.includes(tag)) {
      const newTagList = state.tagsToAdd.filter(tagCheck => tag !== tagCheck)
      setState(prev => ({
        ...prev,
        tagsToAdd: [ ...newTagList ]
      }))
    } else {
      const newTagList = [ ...state.tagsToAdd ]
      newTagList.push(tag)
      setState(prev => ({
        ...prev,
        tagsToAdd: [ ...newTagList ]
      }))
    }
  }

  const saveArticles = function() {
    // console.log(state.resultsToSave)
    // console.log(state.projectsToSaveTo)
    // console.log(state.tagsToAdd)
    if (state.projectsToSaveTo.length === 0) {
      return
    }
    const saveByProject = state.projectsToSaveTo.map(project => {
      const articlesToSave = state.resultsToSave.map(result => {
        return {
          title: result.title,
          authors: result.publication_info.summary,
          language: "English",
          keywords: "Spicy Meatball",
          content: result.resources[0].link,
          flagged: false,
          project_id: project.id,
          description: result.snippet
        }
      });
      return articlesToSave
    })
    for (const project of saveByProject) {
      for (const article of project) {
        console.log(article)
        axios.post('/articles', article)
        .then(res => console.log(res));
      }
    }
  }

  const updateQuery = event => { // put this in onChange in search bar
    const searchString = event.target.value;
    setState(prev => ({
      ...prev,
      searchQuery: searchString
    }))
  }

  const updateSearchParameter = function(category, name) {
    const categoryToChange = { ...state[category] };
    categoryToChange[name] = state[category][name] === true ? false : true
    setState(prev => ({
      ...prev,
      [category]: {
        ...categoryToChange
      }
    }))
  }

  const updateStartDateParameter = function(date, dateString) {
    if (dateString) {
      const month = dateString.substring(0, 3);
      const day = dateString.substring(4, 6);
      const year = dateString.substring(7, 11);
      setState(prev => ({
        ...prev,
        startDate: {
          month,
          day,
          year
        }
      }))
    } else {
      setState(prev => ({
        ...prev,
        startDate: {
          month: "Jan",
          day: "01",
          year: "1900"
        }
      }))
    }
  }

  const updateEndDateParameter = function(date, dateString) {
    if (dateString) {
      const month = dateString.substring(0, 3);
      const day = dateString.substring(4, 6);
      const year = dateString.substring(7, 11);
      setState(prev => ({
        ...prev,
        endDate: {
          month,
          day,
          year
        }
      }))
    } else {
      setState(prev => ({
        ...prev,
        endDate: {
          month: "May",
          day: "20",
          year: "2021"
        }
      }))
    }
  }

  const selectProject = function(name) {
    const projectOption = state.projects.find(project => project.name === name);
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
    selectTagsToAdd,
    selectProjectsToSaveTo,
    updateStartDateParameter,
    updateEndDateParameter,
    updateSearchParameter,
    callSearchAPI, 
    updateQuery, 
    saveArticles, 
    selectArticleForSaving,
    selectProject,
    flagArticle,
    moveArticle,
    deleteArticle
  };
}