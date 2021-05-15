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
    },
    {
      title: 'Keywords',
      dataIndex: 'keywords',
      key: 'keywords'
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content'
    },
    {
      title: 'Move',
      dataIndex: 'move',
      key: 'move'
    },
    {
      title: 'Flag',
      dataIndex: 'flag',
      key: 'flag'
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
      key: 'delete'
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
const clickThis = (button) => {
  return console.log(button)
}

    const articles = projectArticles.map(article => {
      return {
        key: article.id,
        title: article.title,
        authors: article.authors,
        language: article.language,
        keywords: article.keywords,
        content: <a href={article.content} target="_blank">Link to Full Text</a>,
        move: <button onClick={() => clickThis("testerllea von test")}>mvoe?</button>,
        flag: <button onClick={() => clickThis("testerllea von test")}>flage</button>,
        delete: <button onClick={() => clickThis("testerllea von test")}>balate</button>
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
