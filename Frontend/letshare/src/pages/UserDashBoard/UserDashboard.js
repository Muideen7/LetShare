import React from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";

const Dashboard = () => {
  return (
    <Sidebar
      as={Menu}
      animation="push"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="user" />
        Profile
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="inbox" />
        Inbox
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="chart bar" />
        Analytics
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="settings" />
        Settings
      </Menu.Item>
    </Sidebar>
  );
};

export default Dashboard;