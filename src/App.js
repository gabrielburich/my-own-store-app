import React from 'react';
import {Layout} from "antd";
import AppMenu from "@commons/menu/AppMenu";
import AppBreadcrumb from "@commons/breadcrumb/AppBreadcrumb";
import AppRouter from "./router/AppRouter";


const {Header, Sider, Content} = Layout;

const App = () => {

  return (
    <Layout className={'app'}>
      <Header />

      <Layout>
        <Sider width={200} className={'app-sider'}>
          <AppMenu />
        </Sider>

        <Layout className={'app-content-area'}>
          <AppBreadcrumb />

          <Content className={'app-content'}>
            <AppRouter />
          </Content>
        </Layout>

      </Layout>
    </Layout>
  );
};

export default App;
