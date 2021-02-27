import React from 'react';
import styled from 'styled-components';
export default function Title(props) {
  return <Main style={props.style}>{props.text}</Main>;
}

const Main = styled.div`
  font-family: Manrope;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;
`;
