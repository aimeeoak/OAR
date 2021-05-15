import React from "react";

import ArticleItem from "./ArticleItem";
import ProjectItem from "./ProjectItem"; 

import useLibData from '../../hooks/useLibData';

import getArticlesByProject from '../../helpers/library_selectors'

export default function Shelf(props) {

  const {
    state, 
    selectArticle, 
    closeArticle, 
    flagArticle, 
    moveArticle, 
    deleteArticle,
  } = useLibData();
  
 

  const projects = state.projects.map(project => {
    console.log("from shelf.jsx", state)
    console.log("project.id", project.id)
    const projectArticles = getArticlesByProject(state, project.id)
    const articles = projectArticles.map(article => {
      return (<ArticleItem key={article.id} title={article.title} authors={article.authors} language={article.language} keywords={article.keywords} content={article.content} flagged={article.flagged}/>)
    })
  
    return ( <div>
      <ProjectItem key={project.id} name={project.name} description={project.description}/>
      {articles}
    </div>
    )
  })

  return (
    <main>
      {projects}
    </main>
  )
}
