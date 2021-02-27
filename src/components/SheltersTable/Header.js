import React from 'react';
import styled from 'styled-components';
export default function Header() {
  return (
    <Main>
      <NormalColumn>Organization</NormalColumn>
      <NormalColumn>City, State/Prov</NormalColumn>
      <NormalColumn>Visit website</NormalColumn>
      <DonateColumn>Donate</DonateColumn>
    </Main>
  );
}
const Main = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 2%;
  poisition: sticky;
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
