import React, {use} from 'react';
import 'antd/dist/antd.css';
import './LibraryFilter.css';

import useAppData from "../../hooks/useAppData";

import { Menu, Checkbox, DatePicker, Space, Button, Form, Input } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
// const { RangePicker } = DatePicker;

const rootSubmenuKeys = ['sub1', 'sub2'];

export default function LibraryFilter(props) {
  const [openKeys, setOpenKeys] = React.useState(['']);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const projectItems = props.projects.map(project => {
    return (
      <Menu.Item key={project.id}><Checkbox onChange={() => props.selectProjectsToSaveTo(project.id)}> {project.name} </Checkbox></Menu.Item>
    )
  })

  const tagItems = props.tags.map(tag => {
    return (
      <Menu.Item ><Checkbox onChange={() => props.selectTagsToAdd(tag)}> {tag} </Checkbox></Menu.Item>
    )
  })

  const submitItem = <Menu.Item><Button onClick={() => props.saveArticles()} className="library-submit">Save Articles</Button></Menu.Item>

  return (
    <Menu className="library-filterbox" mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
      <SubMenu key="sub1" icon={<MailOutlined />} title="Add to Shelf">
        {projectItems}
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Add Tags">
        {tagItems}
      </SubMenu>
      <SubMenu key="sub3" icon={<MailOutlined />} title="Create a New Project">
      <Form onFinish={props.saveProject} onFieldsChange={props.updateNewProjectName}>
        <Form.Item
        label="New Project"
        name="new-project"
        rules={[{ required: true, message: 'Please input a name for your new project!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button className="library-submit" type="primary" htmlType="submit">
          Save Project
        </Button>
      </Form.Item>
        </Form>
      </SubMenu>
      {submitItem}
    </Menu>
  );
};