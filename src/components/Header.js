import React from 'react';
import styled from 'styled-components';
export default function Header() {
  return (
    <Container className="row">
      <Column width="60%" className="column">
        <TextBox>
          <Title>
            Doge
            <br />
            Shelters
          </Title>

          <SubTitle>Help to save and rescue dogs around globe</SubTitle>
        </TextBox>
      </Column>
      <Column width="40%"></Column>
    </Container>
  );
}

const Container = styled.div`
  background: black;
  min-height: 460px;
`;
const Column = styled.div`
  min-height: 460px;
  min-width: ${(props) => props.width};
  width: 50vw;
  justify-content: center;
`;
const Title = styled.div`
  width: 570px;
  font-family: Manrope;
  font-size: 82px;
  font-style: normal;
  font-weight: 800;
  line-height: 88px;
  letter-spacing: -0.04em;
  text-align: left;
  color: white;
`;

const SubTitle = styled.div`
  font-family: Manrope;
  font-size: 26px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
`;
const TextBox = styled.div`
  margin-left: 25%;
`;
