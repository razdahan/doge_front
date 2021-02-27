import React from 'react';
import styled from 'styled-components';
import IdeaImg from '../assets/Idea.png';
import Title from './Title';
import Text from './Text';
const titleText = 'What’s The Idea?';
const text = `A lot of dog rescue shelters don’t have the time to look for online donations. On the other hand, there are a lot of doge coin hodlerz who love dogs,  and believe that doge should be a legitimate means of payment.

So... we have scraped the internet for rescue shelters and we found 10,548 shelters across the US and Canada!! We have opened them DogeCoin wallets they can easily access.
`;
export default function Idea() {
  return (
    <Container className="row">
      <Column className="column" width="50%" style={{alignItems: 'center'}}>
        <img style={{objectFit: 'cover'}} src={IdeaImg} alt="dog walk" />
      </Column>
      <Column width="50%" className="column">
        <div style={{width: '511px'}}>
          <Title text={titleText} />
          <Text text={text} />
        </div>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  min-height: 671px;
  background: #f5f0e1;
`;
const Column = styled.div`
  min-height: 671px;
  min-width: ${(props) => props.width};
  justify-content: center;
`;
