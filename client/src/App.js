// import logo from '../logo.svg';
import React from 'react';
import './App.css';
import SearchFilter from "./components/body/SearchFilter"
import LibraryFilter from "./components/body/LibraryFilter"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

import SearchComp from "./components/search/SearchComp"

import useAppData from './hooks/useAppData';
import Shelf from './components/library/Shelf';

function App() {
  // const [message, setMessage] = useState("He waits...")
  // const [eggState, setEggState] = useState(false)

  // <h1>{ message }</h1>
  // {eggState && <img src={egg} alt="Egg" />}
  // {!eggState && <button onClick={greatIdea} > Do you dare? </button>}

  // const greatIdea = function() {
  //   setMessage("The Keeper of Eggs rises from his slumber to offer you good luck");
  //   setEggState(true);
  // }

  const {
    state,
    selectTagsToAdd,
    selectProjectsToSaveTo,
    updateStartDateParameter,
    updateEndDateParameter,
    updateSearchParameter,
    callSearchAPI, 
    saveArticles, 
    selectArticleForSaving,
    selectProject,
    flagArticle,
    moveArticle,
    deleteArticle,
    saveProject,
    clearSearchResults
  } = useAppData()

  return (
    <div className="App">
        <Navbar 
        callSearchAPI={callSearchAPI}/>
        <div className="filters-container">
          <SearchFilter 
          updateStartDateParameter={updateStartDateParameter}
          updateEndDateParameter={updateEndDateParameter}
          updateSearchParameter={updateSearchParameter}
          />
          <SearchComp 
          results={state.results}
          callSearchAPI={callSearchAPI}
          selectArticleForSaving={selectArticleForSaving}
          />
          <LibraryFilter 
          projects={state.projects}
          tags={state.tags}
          selectProjectsToSaveTo={selectProjectsToSaveTo}
          selectTagsToAdd={selectTagsToAdd}
          saveArticles={saveArticles}
          saveProject={saveProject}
          clearSearchResults={clearSearchResults}
          />
        </div>
      <div>
        <div>
          <Shelf 
          projects={state.projects}
          articles={state.articles}
          selectProject={selectProject}
          flagArticle={flagArticle}
          moveArticle={moveArticle}
          deleteArticle={deleteArticle}
          />
        </div>
      </div>
      <Footer />    
    </div>
  );
}

export default App;
