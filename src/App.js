import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import WeatherCard from './components/WeatherCard';
import styled from 'styled-components';
import { Col, Row } from 'antd';

const Background = styled.div`
  height: 100vh;
  width: 100%;
  background: #ffc753;
`;
const ClipCut = styled.div`
  position: absolute;
  top: 55px;
  width: 100%;
  height: 880px;
  background: #fff;
  -webkit-clip-path: polygon(0 60%, 100% 31%, 100% 100%, 0% 100%);
`;

function App() {
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Background>
            <WeatherCard />
            <ClipCut />
          </Background>
        </Col>
      </Row>
    </>
  );
}

export default App;
