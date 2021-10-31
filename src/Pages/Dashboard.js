import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import Statistics from "../Component/Dashboard/Statistics";
import TableComponent from "../Component/Dashboard/Table";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("");
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3" onClick={() => setSelected("User List")}>
              User List
            </Menu.Item>
            <Menu.Item key="4" onClick={() => setSelected("Doctor List")}>
              Doctor List
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Add">
            <Menu.Item key="6" onClick={() => setSelected("Add User")}>
              Add User
            </Menu.Item>
            <Menu.Item key="8" onClick={() => setSelected("Add Doctor")}>
              Add Doctor
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            key="9"
            icon={<FileOutlined />}
            onClick={() => setSelected("Appointments")}
          >
            Appointments
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {selected == "" ? (
              <Statistics />
            ) : selected == "User List" || selected == "Doctor List" ? (
              <TableComponent />
            ) : (
              selected
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright @HMS {new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
