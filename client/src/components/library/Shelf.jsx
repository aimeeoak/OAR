import React from "react";

import ArticleItem from "./ArticleItem";
import ProjectItem from "./ProjectItem"; 

import useLibData from '../../hooks/useLibData';

import getArticlesByProject from '../../helpers/library_selectors'
import Checkbox from 'antd/lib/checkbox/Checkbox';

import { Table, Collapse } from 'antd';

const { Panel } = Collapse;

export default function Shelf(props) {

  const {
    state, 
    selectArticle, 
    closeArticle, 
    flagArticle, 
    moveArticle, 
    deleteArticle,
  } = useLibData();
  
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Authors',
      dataIndex: 'authors',
      key: 'authors'
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language'
    },,
    {
      title: 'Keywords',
      dataIndex: 'keywords',
      key: 'keywords'
    },,
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content'
    },,
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions'
    }
  ]

  const projects = state.projects.map(project => {
    console.log("from shelf.jsx", state)
    console.log("project.id", project.id)
    const projectArticles = getArticlesByProject(state, project.id)
    /* const articles = projectArticles.map(article => {
      return (<ArticleItem key={article.id} title={article.title} authors={article.authors} language={article.language} keywords={article.keywords} content={article.content} flagged={article.flagged}/>)
    }) 

    return ( <div>
      <ProjectItem key={project.id} name={project.name} description={project.description}/>
      {articles}
    </div>
    ) */

    const articles = projectArticles.map(article => {
      return {
        key: article.id,
        title: article.title,
        authors: article.authors,
        language: article.language,
        keywords: article.keywords,
        content: article.content,
        actions: <button onClick={console.log("test")} />
      }
    })

    return (
      <Panel header={project.name} key={project.id}>
        <p>
          <Table columns={columns} dataSource={articles}>
          </Table>
        </p>
      </Panel>
    )
  })

  return (
    <Collapse>
      {projects}
    </Collapse>
  )

  /* return (
    <main>
      {projects}
    </main>
  ) */
}
