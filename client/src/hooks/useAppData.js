import dotenv from 'dotenv';

import { useState, useEffect } from "react";
import axios from "axios";

// const SerpApi = require('google-search-results-nodejs')

import SerpApi from 'google-search-results-nodejs'
dotenv.config();

export default function useAppData() {

  const [state, setState] = useState({
    results: [],
    resultsToSave: [],
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
  })

  useEffect(() => {
    return axios.get('/projects')
    .then(res => {
      setState(prev => (
        { 
          ...prev, 
          projects: [...res.data],
        }));
      })
  }, []);

  const callSearchAPI = function() {
    const coolAPIKey = process.env.REACT_APP_SERP_API
    const search = new SerpApi.GoogleSearch(coolAPIKey)
    const params = {
      engine: "google_scholar",
      q: state.searchQuery
    };
    const callback = (data) => {
      //console.log(data["organic_results"])
      const organicResults = data["organic_results"];
      const gmoResults = organicResults.filter((x) =>  x.resources ? x : null)
      // console.log("refined results", gmoResults)
      //tite, authors, language, keywords, content, project_id
/*      const realResults = gmoResults.map((x) => {
        return {
          key: gmoResults.indexOf(x),
          title: x.title,
          author: x.publication_info.summary,
          snippet: x.snippet,
          language: "English",
          content: x.resources[0].link,
        }
      }) */
      // console.log(gmoResults)
      // console.log(realResults)
      setState(prev => ({
        ...prev,
        results: [ ...gmoResults ]
      }))
      //title -- gmoResults.title
      //author -- gmoResults.publication_info.author
      // language-- on selection/search?
      // keywords -- user adds 
      // content-- gmoResults.reources.link
      //project_id --user selection 


    };
    search.json(params, callback)
    /* axios.get("/api/search", search )
    .then((res) => {
      console.log("response", res)
    }) */

    //Vahid, our cool mentor-- add params to the header of our request? 
    // 
   /*  const query = state.searchQuery
    const url = `https://serpapi.com/search.json?engine=google&q=${query}&api_key=d8ac04c3bc6237908ef51d9d829e768164c6ceb664a522a6d77022333e83ed38`
    axios.get(url)
    .then(res => {
      console.log(res)
      console.log(res.headers)
      console.log(res.data)
    }) */
  }

  // console.log(state.results);

  const selectArticleForSaving = function(title) {
    console.log("test")
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
    console.log("test")
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
    console.log(state.projectsToSaveTo)
    console.log(state.resultsToSave)
    if (state.projectsToSaveTo.length === 0) {
      return
    }
    const saveByProject = state.projectsToSaveTo.map(project => {
      const articlesToSave = state.resultsToSave.map(result => {
        return {
          ...result,
          project_id: project.id
        }
      });
      return articlesToSave
    })
    for (const project of saveByProject) {
      for (const article of project) {
        console.log("test")
        axios.post('/articles', article); // find a better way to do this
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
      console.log(dateString);
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
      console.log(dateString);
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

  return { state, selectTagsToAdd, selectProjectsToSaveTo, updateStartDateParameter, updateEndDateParameter, updateSearchParameter, callSearchAPI, updateQuery, saveArticles, selectArticleForSaving }
}