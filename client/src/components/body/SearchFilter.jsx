import React from 'react';
import 'antd/dist/antd.css';
import './SearchFilter.css';
import moment from 'moment';

import useAppData from "../../hooks/useAppData";

import { Menu, Checkbox, DatePicker, Space, Button } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
// const { RangePicker } = DatePicker;

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];

export default function SearchFilter() {
  const [openKeys, setOpenKeys] = React.useState(['']);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const {state, updateStartDateParameter, updateEndDateParameter, updateSearchParameter, callSearchAPI, updateQuery, saveArticles, selectArticleForSaving} = useAppData();

  //const logDate = () => console.log(moment().format('dddd'));

  return (
    <Menu className="search-filterbox" mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
      <SubMenu key="sub1" icon={<MailOutlined />} title="Search Filters">
        <Menu.Item key="1"><Checkbox defaultChecked={true} onChange={() => updateSearchParameter("sourceType", "journal")}> Journals </Checkbox></Menu.Item>
        <Menu.Item key="2"><Checkbox defaultChecked={true} onChange={() => updateSearchParameter("sourceType", "book")}> Books </Checkbox></Menu.Item>
        <Menu.Item key="3"><Checkbox> Newspaper Articles </Checkbox></Menu.Item>
        <Menu.Item key="4"><Checkbox> Book Reviews </Checkbox></Menu.Item>
        <Menu.Item key="5"><Checkbox> Dissertations </Checkbox></Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Subjects">
        <Menu.Item key="6"><Checkbox defaultChecked={true} onChange={() => updateSearchParameter("subject", "math")}> Math</Checkbox></Menu.Item>
        <Menu.Item key="7"><Checkbox defaultChecked={true} onChange={() => updateSearchParameter("subject", "nautical_stuff")}> Nautical Stuff</Checkbox></Menu.Item>
        <Menu.Item key="8"><Checkbox> Applied Nuclear Thermodynamics</Checkbox></Menu.Item>
        <Menu.Item key="9"><Checkbox> Art????</Checkbox></Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<SettingOutlined />} title="Publication Date Range">
        <Menu.Item key="10">
          <Space direction="vertical" size={12}>
            <DatePicker placeholder="Start Date" format="MMM-DD-YYYY" onChange={updateStartDateParameter}/>
          </Space>
        </Menu.Item>
        <Menu.Item key="11"> 
          <Space direction="vertical" size={12}>
            <DatePicker placeholder="End Date" format="MMM-DD-YYYY" onChange={updateEndDateParameter}/>
          </Space>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Source">
        <Menu.Item key="12"><Checkbox defaultChecked={true} onChange={() => updateSearchParameter("sourceAPI", "serpAPI")}> SerpAPI </Checkbox></Menu.Item>
        <Menu.Item key="13"><Checkbox defaultChecked={true} onChange={() => updateSearchParameter("sourceAPI", "coreAPI")}> CoreAPI </Checkbox></Menu.Item>
      </SubMenu>
      <SubMenu key="sub5" icon={<SettingOutlined />} title="Languages">
        <Menu.Item key="14"><Checkbox defaultChecked={true} onChange={() => updateSearchParameter("language", "english")}> English </Checkbox></Menu.Item>
        <Menu.Item key="15"><Checkbox defaultChecked={true} onChange={() => updateSearchParameter("language", "french")}> French </Checkbox></Menu.Item>
      </SubMenu>
    </Menu>
  );
};