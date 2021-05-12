import React from 'react';
import 'antd/dist/antd.css';
import './SearchFilter.css';

import { Menu, Checkbox, DatePicker, Space, Button } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
// const { RangePicker } = DatePicker;

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];

export default function SearchFilter() {
  const [openKeys, setOpenKeys] = React.useState(['']);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu class="filterbox" mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
      <SubMenu key="sub1" icon={<MailOutlined />} title="Search Filters">
        <Menu.Item key="1"><Checkbox /> Journals </Menu.Item>
        <Menu.Item key="2"><Checkbox /> Books </Menu.Item>
        <Menu.Item key="3"><Checkbox /> Newspaper Articles </Menu.Item>
        <Menu.Item key="4"><Checkbox /> Book Reviews </Menu.Item>
        <Menu.Item key="5"><Checkbox /> Dissertations </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Subjects">
        <Menu.Item key="6"><Checkbox /> Math</Menu.Item>
        <Menu.Item key="7"><Checkbox /> Nerd Stuff</Menu.Item>
        <Menu.Item key="8"><Checkbox /> Applied Nuclear Thermodynamics</Menu.Item>
        <Menu.Item key="9"><Checkbox /> Art????</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<SettingOutlined />} title="Publication Date Range">
        <Menu.Item key="10">
          <Space direction="vertical" size={12}>
            <DatePicker placeholder="Start Date"/>
          </Space>
        </Menu.Item>
        <Menu.Item key="11"> 
          <Space direction="vertical" size={12}>
            <DatePicker placeholder="End Date"/>
          </Space>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Source">
        <Menu.Item key="12"><Checkbox /> babushka</Menu.Item>
      </SubMenu>
      <SubMenu key="sub5" icon={<SettingOutlined />} title="Languages">
        <Menu.Item key="13"><Checkbox /> Deutsch </Menu.Item>
        <Menu.Item key="14"><Checkbox /> Québécois French </Menu.Item>
        <Menu.Item key="15"><Checkbox /> Swahili </Menu.Item>
        <Menu.Item key="16"><Checkbox /> Eliksni </Menu.Item>
        <Menu.Item key="17"><Checkbox /> ...English </Menu.Item>
      </SubMenu>
      <Menu.Item key="18"><Button type="primary">Submit</Button></Menu.Item>
    </Menu>
  );
};