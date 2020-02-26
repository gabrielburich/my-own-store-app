import React from 'react';
import {Layout} from "antd";
import AppMenu from "./components/commons/menu/AppMenu";
import AppBreadcrumb from "./components/commons/breadcrumb/AppBreadcrumb";
import AppRouter from "./router/AppRouter";
import './App.css';


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
