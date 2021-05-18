import React, {use} from 'react';
import 'antd/dist/antd.css';
import './LibraryFilter.css';

import useAppData from "../../hooks/useAppData";

import { Menu, Checkbox, DatePicker, Space, Button } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
// const { RangePicker } = DatePicker;

const rootSubmenuKeys = ['sub1', 'sub2'];

export default function LibraryFilter() {
  const [openKeys, setOpenKeys] = React.useState(['']);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const {state, selectTagsToAdd, selectProjectsToSaveTo, updateSearchParameter, callSearchAPI, updateQuery, saveArticles, selectArticleForSaving} = useAppData();


  const projectItems = state.projects.map(project => {
    return (
      <Menu.Item key={project.id}><Checkbox onChange={() => selectProjectsToSaveTo(project.id)}> {project.name} </Checkbox></Menu.Item>
    )
  })

  const tagItems = state.tags.map(tag => {
    return (
      <Menu.Item ><Checkbox onChange={() => selectTagsToAdd(tag)}> {tag} </Checkbox></Menu.Item>
    )
  })

  const submitItem = <Menu.Item><Button onClick={saveArticles} className="library-submit">Submit</Button></Menu.Item>

  return (
    <Menu className="library-filterbox" mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
      <SubMenu key="sub1" icon={<MailOutlined />} title="Add to Shelf">
        {projectItems}
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Add Tags">
        {tagItems}
      </SubMenu>
      {submitItem}
    </Menu>
  );
};