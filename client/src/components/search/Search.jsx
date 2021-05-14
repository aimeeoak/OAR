import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
//import './index.css';
import { Table } from 'antd';

import useAppData from "../../hooks/useAppData";
import Checkbox from 'antd/lib/checkbox/Checkbox';

const columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
} ];

export default function Search() {
  const { state, updateSearchParameter, 
    callSearchAPI, updateQuery, 
    saveArticles, selectArticleForSaving } = useAppData();

  return (
    <Table
      rowSelection={{type: Checkbox, onSelect: selectArticleForSaving}}
      columns={columns}
      dataSource={data}
    />
  );
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