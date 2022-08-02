import React from 'react';
import { useState } from 'react';
import { Card, Col, Row, Radio, Select, List } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  max-width: 708px;
  height: 35px;
  background: #fff;
  border-radius: 100px;
  margin: 0 auto 0 auto;
  position: relative;
  top: 95px;
`;

const Description = styled.div`
  font-size: 25px;
  color: #212121;
  margin: 0 0 30px 14px;
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 30px 14px;
`;

const Temperature = styled.div`
  color: #212121;
  font-size: 96px;
  font-weight: 300;
  display: flex;
`;

const Celsius = styled.div`
  font-weight: normal;
  font-size: 42px;
`;

const AirFlow = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 300;
  color: #212121;
  margin: 0 0 10px 14px;
`;

const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 300;
  color: #212121;
  margin: 0 0 0 14px;
`;

const selectList = [
  {
    label: '即時天氣預報',
    value: true,
  },
  {
    label: '代辦清單',
    value: false,
  },
];

function WeatherCard() {
  const [btn, setBtn] = useState(true);
  const [cityList, setCityList] = useState([]);

  // 切換功能按鈕
  const changeSelect = ({ target: { value } }) => {
    console.log(value);
    setBtn(value);
  };
  // 選擇縣市下拉選單
  const items = [
    {
      key: '1',
      label: '高雄市',
    },
    {
      key: '2',
      label: '台北市',
    },
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Container>
        {/* <Row>
          <Col xs={22} sm={24} md={24} lg={24} xl={24} xxl={24}> */}
          
            <Box>
              <Radio.Group
                options={selectList}
                onChange={changeSelect}
                value={btn}
                optionType="button"
                buttonStyle="solid"
              />
            </Box>

            <FlexBox>
              <Card
                className="card"
                style={{
                  width: 700,
                }}
              >
                <Select
                  defaultValue={items[0]}
                  bordered={false}
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                  className="selectList"
                >
                  {items.map((v, i) => {
                    return (
                      <Option value={v.label} key={i}>
                        {v.label}
                      </Option>
                    );
                  })}
                </Select>
                <Description>多雲時晴</Description>
                <CurrentWeather>
                  <Temperature>
                    23 <Celsius>°C</Celsius>
                  </Temperature>
                </CurrentWeather>
                <AirFlow>23 m/h</AirFlow>
                <Rain>48%</Rain>
              </Card>
            </FlexBox>
          {/* </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default WeatherCard;
