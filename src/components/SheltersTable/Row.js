import React from 'react';
import styled from 'styled-components';

export default function Row(props) {
  return (
    <Main
      onClick={props.clicked}
      active={props.active}
      style={{background: props.active ? '#FFFAE9' : 'white'}}
    >
      <NormalColumn>Polina’s & Chia’s shelter</NormalColumn>
      <NormalColumn>Tel aviv, Israel</NormalColumn>
      <NormalColumn>SaveChia.com</NormalColumn>
      <DonateColumn>Dognate</DonateColumn>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 2%;
  min-height: 56px;

  /* Cards */

  box-shadow: ${(props) =>
    props.active ? '0px 4px 15px 8px rgba(0, 0, 0, 0.1)' : '0'};
  border-bottom: 1px solid #f2f2f2;
`;
const NormalColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;
  min-height: 50px;
`;
const DonateColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 10%;
  min-height: 50px;
`;
