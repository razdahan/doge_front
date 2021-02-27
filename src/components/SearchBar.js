import React from 'react';
import styled from 'styled-components';
export default function SearchBar() {
  return (
    <Container>
      <Row>
        <SmallText>search</SmallText>
        <Input />
        <Button>Go</Button>
      </Row>
    </Container>
  );
}
const Container = styled.div`
  min-width: 85.8%;
  position: relative;
  top: 200px;
  background: white;
  min-height: 94px;
  box-shadow: 0px 4px 15px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;
const Input = styled.input`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  min-width: 70%;
  height: 40px;
  border: 0px;
`;
const Row = styled.div`
  min-height: 94px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const SmallText = styled.div`
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;
const Button = styled.button`
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 2px;
  width: 80px;
  height: 36px;
`;
