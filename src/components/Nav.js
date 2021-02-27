import React from 'react';
import styled from 'styled-components';
import {Row} from '../globalStyles';
function Nav(props) {
  return (
    <Bar>
      {props.items.map((item) => {
        return item;
      })}
    </Bar>
  );
}
export default Nav;
const Bar = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100px;
  background: #fefcf5;
`;
