import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Text from './Text';
const titleText = 'Help US Grow';
const text = `Doge Shelters is a completely pro bono project and is deeply depended on
the help of people just like you.
Here are some of the ways you can help:`;
export default function Grow(props) {
  return (
    <Container>
      <Title style={{position: 'relative', top: '95px'}} text={titleText} />
      <Text style={{textAlign: 'center',position: 'relative', top: '150px'}} text={text} />
    </Container>
  );
}

const Container = styled.div`
  min-height: 736px;
  background: #fefcf5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
