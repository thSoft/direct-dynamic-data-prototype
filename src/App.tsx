import { Button, Col, List, Row, Typography } from "antd";
import "antd/dist/antd.css";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { useState } from "react";

type Property = {
  name: string;
};

export default function App() {
  const [leftSiderCollapsed, setLeftSiderCollapsed] = useState(true);
  const toggleLeft = () => {
    setLeftSiderCollapsed(!leftSiderCollapsed);
  };
  const [rightSiderCollapsed, setRightSiderCollapsed] = useState(true);
  const toggleRight = () => {
    setRightSiderCollapsed(!rightSiderCollapsed);
  };

  const properties: Property[] = [
    {
      name: "Name"
    },
    {
      name: "Age"
    },
    {
      name: "Gender"
    }
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "lightgray" }}>
        <Row align="middle">
          <Col span={6}>
            <Button onClick={toggleLeft}>Toggle Properties</Button>
          </Col>
          <Col span={12}>
            <Typography.Title level={2} style={{ textAlign: "center" }}>
              Bar Chart
            </Typography.Title>
          </Col>
          <Col span={6}>
            <Button onClick={toggleRight}>Toggle Definition</Button>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsedWidth={0}
          collapsed={leftSiderCollapsed}
          onCollapse={setLeftSiderCollapsed}
          trigger={null}
          style={{ backgroundColor: "lightgray" }}
        >
          <List
            itemLayout="horizontal"
            dataSource={properties}
            renderItem={(property) => (
              <List.Item>
                <List.Item.Meta title={property.name} />
                foo
              </List.Item>
            )}
          />
        </Sider>
        <Content>Content</Content>
        <Sider
          collapsible
          collapsedWidth={0}
          collapsed={rightSiderCollapsed}
          onCollapse={setRightSiderCollapsed}
          trigger={null}
          style={{ backgroundColor: "lightgray" }}
        ></Sider>
      </Layout>
    </Layout>
  );
}
