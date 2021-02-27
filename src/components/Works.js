import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Text from './Text';
const titleText = 'How it works';
const text = `Doge Shelter is an easy-to-use platform that connects rescue shelters and dogecoin owners.  

As a rescue shelter owner to use Doge Shelters all you need to do is  to login into your account and use your doge coins as you wish. 

As Doge donors the use is also quite simple; find the shelter you would like to dognate to, copy the wallet address of the shelter, dognate via your wallet. 
`;
export default function Works() {
  return (
    <Container className="row">
      <Column width="50%" className="column">
        <div style={{width: '511px'}}>
          <Title text={titleText} />
          <Text text={text} />
        </div>
      </Column>
      <Column width="50%" className="column"></Column>
    </Container>
  );
}

const Container = styled.div`
  min-height: 696px;
  background: #fefcf5;
`;
const Column = styled.div`
  min-height: 671px;
  min-width: ${(props) => props.width};
  justify-content: center;
  align-items: center;
`;

// const Text = styled.div`
//   width: 511px;
//   font-family: Manrope;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 32px;
//   letter-spacing: 0em;
//   text-align: left;
// `;
