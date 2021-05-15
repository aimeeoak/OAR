import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
//import './index.css';
import { Table, Collapse } from 'antd';
import useAppData from "../../hooks/useAppData";
import Checkbox from 'antd/lib/checkbox/Checkbox';

const { Panel } = Collapse;

export default function Search() {
  const { state, updateSearchParameter, 
    callSearchAPI, updateQuery, 
    saveArticles, selectArticleForSaving } = useAppData();

  const columns = [
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
      title: 'Save',
      dataIndex: 'save',
      key: 'save'
    },
  ]

  const articleTitles = [];

  const clickThis = (button) => {
    return console.log(button)
  }

  const articles = state.results.map(article => {
    articleTitles.push(article.title);

    return [{
      authors: article.authors,
      language: article.language,
      keywords: article.keywords,
      content: <a href={article.content} target="_blank">Link to Full Text</a>,
      save: <button onClick={() => clickThis("testerllea von test")}>save?</button>,
    }]
  })

  const tableData = [];

  for (let i = 0; i < articleTitles.length; i++) {
    console.log("test");
    tableData.push(
    <Panel header={articleTitles[i]} key={i}>
        <Table columns={columns} dataSource={articles[i]}>
        </Table>
    </Panel>
    )
  }

  return (
    <>
    <button onClick={() => callSearchAPI()}> Dummy search results </button>
    <Collapse accordion>
      {tableData}
    </Collapse>
    </>
  )
}

/* {
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
} 

state = {
  selectedRowKeys: [],
};
selectRow = (record) => {
  const selectedRowKeys = [...this.state.selectedRowKeys];
  if (selectedRowKeys.indexOf(record.key) >= 0) {
    selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
  } else {
    selectedRowKeys.push(record.key);
  }
  this.setState({ selectedRowKeys });
}
onSelectedRowKeysChange = (selectedRowKeys) => {
  this.setState({ selectedRowKeys });
}
render() {
  const { selectedRowKeys } = this.state;
  const rowSelection = {
    selectedRowKeys,
    onChange: this.onSelectedRowKeysChange,
  };
}

*/