import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
//import './index.css';
import { Table, Collapse, Select, Input, Button } from 'antd';

import useAppData from "../../hooks/useAppData";
import Checkbox from 'antd/lib/checkbox/Checkbox';

const { Search } = Input;
const { Panel } = Collapse;

export default function SearchComp() {
  const { state, updateSearchParameter, 
    callSearchAPI, updateQuery, 
    saveArticles, selectArticleForSaving } = useAppData();

  const columns = [{
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  }, {
    title: 'Author and Publication',
    dataIndex: 'author',
    key: 'author'
  }, {
    title: 'Language',
    dataIndex: 'language',
    key: 'language'
  }, {
    title: 'Snippet',
    dataIndex: 'snippet',
    key: 'snippet'
  }, {
    title: 'Link to Full Text',
    dataIndex: 'content',
    key: 'content'
  }, {
    title: 'Select for Saving',
    dataIndex: 'save',
    key: 'save'
  }];

  const gmoResults = state.results.map((x) => {
    return {
      key: state.results.indexOf(x),
      title: x.title,
      author: x.publication_info.summary,
      snippet: x.snippet,
      language: "English",
      content: <a href={x.resources[0].link} target="_blank"> Link to Full Text </a>,
      save: <button onClick={() => selectArticleForSaving(x.title)}>Save</button>
    }
  })

 

  return (
    <>
    <form onSubmit={event => event.preventDefault()}>
      <Search placeholder="Search your topic..." 
      style={{ width: 200 }}
      enterButton
      onChange={updateQuery}
      onSearch={callSearchAPI}/>
    </form>
    <Table
      
      columns={columns}
      dataSource={gmoResults}
      
    />
    </>
  );
}