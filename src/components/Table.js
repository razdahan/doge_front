import React, {useState} from 'react';
import styled from 'styled-components';
import {Scrollbars} from 'react-custom-scrollbars';
import Header from './SheltersTable/Header';
import Row from './SheltersTable/Row';
import Seperator from './SheltersTable/Seperator';
export default function Table() {
  const {active, setActive} = useState(null);
  function changeActive(e) {
    console.log('clicked');
    e.target.active = true;
  }
  return (
    <Main>
      <Header />
      <Row active={true} />
      <Row clicked={changeActive} />
      <Row clicked={changeActive} />
      <Row clicked={changeActive} />
      <Row clicked={changeActive} />
      <Row clicked={changeActive} />
      <Row clicked={changeActive} />
      <Row clicked={changeActive} />
      <Row clicked={changeActive} />
      <Row clicked={changeActive} />
      <Row clicked={changeActive} />
      <Row clicked={changeActive} />
      <Row clicked={changeActive} />
      <Row clicked={changeActive} />
      <Row clicked={changeActive} />
      <Row clicked={changeActive} />
    </Main>
  );
}

const Main = styled(Scrollbars)`
  max-width: 85.8%;
  width: 85.8%;
  min-height: 448px;
  left: 0px;
  top: 0px;
  position: relative;
  top: 220px;
  background: #ffffff;
  /* Cards */
  box-shadow: 0px 4px 15px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;
