import React from "react";

import ArticleItem from "./ArticleItem";
import ProjectItem from "./ProjectItem"; 

import useLibData from '../../hooks/useLibData';

import getArticlesByProject from '../../helpers/library_selectors'

import { Checkbox, Table, Collapse, Select } from 'antd';

const { Panel } = Collapse;
const { Option } = Select;

export default function Shelf(props) {

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
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
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

  const selectOptions = props.projects.map(project => {
    return <Option value={project.name}>{project.name}</Option>
  })

  const projects = props.projects.map(project => {
    // console.log("from shelf.jsx", state)
    // console.log("project.id", project.id)
    const projectArticles = getArticlesByProject(props.articles, project.id)

    const articles = projectArticles.map(article => {
      return {
        key: article.id,
        title: article.title,
        authors: article.authors,
        language: article.language,
        keywords: article.keywords,
        description: article.description,
        content: <a href={article.content} target="_blank">Link to Full Text</a>,
        move: <>
        <Select defaultValue={project.name} onChange={props.selectProject}>
          {selectOptions}
        </Select>
        <button className="moveArticle" onClick={() => props.moveArticle(article.id)}>move</button>
        </>,
        flag: <Checkbox className="flagArticle" defaultChecked={article.flagged} onClick={() => props.flagArticle(article.id)}></Checkbox>,
        delete: <button type="submit" className="deleteArticle" onClick={() => props.deleteArticle(article.id)}>delete</button>
      }
    })

    return (
      <Panel className="table" header={project.name} key={project.id}>
          <Table columns={columns} dataSource={articles}>
          </Table>
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
