import React from 'react';
import {Layout} from 'antd';
import AppRouter from "./AppRouter";
import AppMenu from "./components/commons/appMenu/AppMenu";
import {BrowserRouter} from "react-router-dom";
import './App.css';


function App() {

  return (
      <BrowserRouter>
          <Layout>
              <Layout.Sider breakpoint="lg" collapsedWidth="0">
                  <AppMenu/>
              </Layout.Sider>
              <Layout>
                  <Layout.Content><AppRouter/></Layout.Content>

              </Layout>
          </Layout>
      </BrowserRouter>
  );
}

export default App;
