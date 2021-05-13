import React from "react";

import ArticleItem from "./ArticleItem";
import ProjectItem from "./ProjectItem"; 

import useLibData from '../../hooks/library_hooks/useLibData';

import { getArticlesByProject } from "../../helpers/library/library_selectors";

export default function Shelf(props) {

  const {
    state, 
    selectArticle, 
    closeArticle, 
    flagArticle, 
    moveArticle, 
    deleteArticle,
  } = useLibData();
  
  const projectArticles = getArticlesByProject(state);

  const projects = state.projects.map(project => {
    const articles = projectArticles.map(article => {
      return <ArticleItem key={article.id} title={article.title} />
    })
    return ( <div>
      <ProjectItem key={project.id} name={project.name} />
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
