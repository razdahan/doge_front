import React from 'react';
import styled from 'styled-components';
export default function Text(props) {
  return (
    <Main style={props.style}>
      {props.text.split('\n').map((i, index) => {
        return <div key={index}>{i}</div>;
      })}
    </Main>
  );
}
const Main = styled.div`
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;
