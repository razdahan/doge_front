import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Text from './Text';
import SearchBar from './SearchBar';
import Table from './Table';

const titleText = 'Shelters List';
const text = `Find rescue shelter you’d like to dognate to.
Then simply click on ‘Dognate’ button to copy the wallet address.
Don’t have dogecoin? Now is great time to get the currency of the people
`;
export default function Shelters() {
  return (
    <Container>
      <Title style={{position: 'relative', top: '118px'}} text={titleText} />
      <Text
        style={{position: 'relative', top: '180px', textAlign: 'center'}}
        text={text}
      />
      <SearchBar />
      <Table />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f0e1;
  min-height: 1007px;
`;
