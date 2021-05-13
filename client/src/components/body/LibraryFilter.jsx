import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './LibraryFilter.css';

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

  return (
    <Menu className="library-filterbox" mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
      <SubMenu key="sub1" icon={<MailOutlined />} title="Add to Shelf">
        <Menu.Item key="1"><Checkbox /> Project 1 </Menu.Item>
        <Menu.Item key="2"><Checkbox /> Project 2 </Menu.Item>
        <Menu.Item key="3"><Checkbox /> Project 3 </Menu.Item>
        <Menu.Item key="4"><Checkbox /> Project 4 </Menu.Item>
        <Menu.Item key="5"><Checkbox /> Project 5 </Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Add Tags">
        <Menu.Item key="6"><Checkbox /> Math</Menu.Item>
        <Menu.Item key="7"><Checkbox /> Nerd Stuff</Menu.Item>
        <Menu.Item key="8"><Checkbox /> Applied Nuclear Thermodynamics</Menu.Item>
        <Menu.Item key="9"><Checkbox /> Art????</Menu.Item>
      </SubMenu>
      <Menu.Item key="10"><Button className="library-submit">Submit</Button></Menu.Item>
    </Menu>
  );
};