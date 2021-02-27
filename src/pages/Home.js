import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Idea from '../components/Idea';
import Works from '../components/Works';
import Shelters from '../components/Shelters';
import Grow from '../components/Grow';
export default function Home() {
  let headers = ['Shelters list', 'Log-in', 'Help Us', 'About'];
  headers = headers.map((header) => <NavItem>{header}</NavItem>);
  return (
    <div>
      <Nav items={headers} />

      <Header />
      <Idea />
      <Works />
      <Shelters />
      <Grow />
    </div>
  );
}

const NavItem = styled.div`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.01em;
  text-align: center;
  cursor: pointer;
`;
