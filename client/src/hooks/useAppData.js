import { useState, useEffect } from "react";
import axios from "axios";

export default function useAppData() {

  const [state, setState] = useState({
    results: [],
    resultsToSave: [],
    projects: [],
    searchQuery: null,
    subject: {
      math: false,
      nautical_stuff: false
    },
    language: {
      english: true,
      french: true
    },
    sourceAPI: {
      serpAPI: true,
      coreAPI: false
    },
    sourceType: {
      journal: true,
      book: true
    },
    startDate: null,
    endDate: null
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

  const callSearchAPI = function() {
    // make the call with all the stuff in state, then setState into results
    setState(prev => ({
      ...prev,
      results: [{
        title: "Something that won't get me in trouble",
        authors: "Aim Ee",
        language: "stinky French",
        keywords: "eh",
        content: "something something Boromir"
      }]
    }))
  }

  const updateSearchParameter = function(category, name) {
    const currentStatus = state[category][name]
    setState(prev => ({
      ...prev,
      category: {
        name: !currentStatus
      }
    }))
  }

  return { state, updateSearchParameter, callSearchAPI, updateQuery, saveArticles, selectArticleForSaving }
}