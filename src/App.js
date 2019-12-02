import React from 'react';
import { Row, Col } from 'antd';
import AppRouter from "./AppRouter";
import AppMenu from "./components/commons/appMenu/AppMenu";
import {BrowserRouter} from "react-router-dom";
import './App.css';


function App() {

  return (
      <BrowserRouter>
        <Row>
          <Col span={4}>
              <div className="menu">
                  <AppMenu/>
              </div>
          </Col>
          <Col span={20}>
              <div className="module">
                  <AppRouter/>
              </div>
          </Col>
        </Row>
      </BrowserRouter>
  );
}

export default App;
