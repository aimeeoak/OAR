import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
//import './index.css';
import { Table, Collapse, Select, Input, Button, Checkbox } from 'antd';

import './SearchComp.css'

import useAppData from "../../hooks/useAppData";

const { Search } = Input;
const { Panel } = Collapse;

export default function SearchComp(props) {

  const columns = [{
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  }, {
    title: 'Author and Publication',
    dataIndex: 'authors',
    key: 'authors'
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

  const gmoResults = props.results.map((x) => {
    return {
      key: props.results.indexOf(x),
      title: x.title,
      authors: x.publication_info.summary,
      snippet: x.snippet,
      language: "English",
      content: <a href={x.resources[0].link} target="_blank"> Link to Full Text </a>,
      save: <Checkbox onClick={() => props.selectArticleForSaving(x.title)}>Save</Checkbox>
    }
  })

  return (
    <>
    {props.results.length === 0 && <div> Start a Search! </div>}
    {props.results.length !== 0 &&
    <Table className="table-layout"
    pagination={false}
      columns={columns}
      dataSource={gmoResults}
    />
    }
      
    </>
  );
}