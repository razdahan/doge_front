import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => [props.align ? props.align : 'center']};
  justify-content: ${(props) => [props.justify ? props.justify : 'center']};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => [props.align ? props.align : 'center']};
  justify-content: ${(props) => [props.justify ? props.justify : 'center']};
`;
