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
    const coolAPIKey = process.env
    const search = new SerpApi.GoogleSearch(coolAPIKey)
    const params = {
      engine: "google_scholar",
      q: state.searchQuery
    };
    const callback = (data) => {
      console.log(data["organic_results"])
    };
    search.json(params, callback)
  }

  const selectArticleForSaving = function(id) {
    if (state.resultsToSave.length === 0) {
      setState(prev => ({
        ...prev,
        resultsToSave: [ state.results[id] ]
      }))
      return id;
    }
    const checkForItem = state.resultsToSave.find(result => result.id === id)
    if (!checkForItem) {
      const resultsSave = [ ...state.resultsToSave, state.results[id] ]
      setState(prev => ({
        ...prev,
        resultsToSave: [ ...resultsSave ]
      }))
    } else {
      const newSaveList = state.resultsToSave.filter(result => (!result.id === id))
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

  console.log(state.projectsToSaveTo);

  const selectTagsToAdd = function(tag) {
    if (state.tagsToAdd.includes(tag)) {
      const newTagList = state.tagsToAdd.filter(tagCheck => tag !== tagCheck)
      setState(prev => ({
        ...prev,
        tagsToAdd: [ ...newTagList ]
      }))
      console.log(newTagList);
    } else {
      const newTagList = [ ...state.tagsToAdd ]
      newTagList.push(tag)
      setState(prev => ({
        ...prev,
        tagsToAdd: [ ...newTagList ]
      }))
      console.log(newTagList);
    }
  }

  const saveArticles = function(project_id) {
    const articlesToSave = state.resultsToSave.map(result => {
      return {
        ...result,
        projectIDwhatIstheKeyagain: project_id
      }
    });
    for (const article of articlesToSave) {
      axios.post('/articles', article); // find a better way to do this
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
    console.log(categoryToChange[name])
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

  console.log(state.startDate);
  console.log(state.endDate);

  return { state, selectTagsToAdd, selectProjectsToSaveTo, updateStartDateParameter, updateEndDateParameter, updateSearchParameter, callSearchAPI, updateQuery, saveArticles, selectArticleForSaving }
}