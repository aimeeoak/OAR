import dotenv from 'dotenv';

import { useState, useEffect } from "react";
import axios from "axios";

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
///ok, so the table has some pagination-- not sure how to access that, but there are more results beyond what we get
//the num: 100 limits our organic results to 100 acutal results, and start: 20 (or, 30, 40, etc) fetches the next page of results
// no idea how to attach this to the pagination but we can try!
  const callSearchAPI = function() {
    const coolAPIKey = process.env.REACT_APP_SERP_API
    const search = new SerpApi.GoogleSearch(coolAPIKey)
    const params = {
      engine: "google_scholar",
      q: state.searchQuery,
      num: 100
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