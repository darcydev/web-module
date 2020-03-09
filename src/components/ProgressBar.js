import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

import '../variables.scss';

export default function ProgressBar({ value = 100 }) {
  return (
    <OuterBar>
      <Motion
        defaultStyle={{ width: 100 }}
        style={{
          width: spring(value, {
            stiffness: 30,
            damping: 15
          })
        }}
      >
        {style => <InnerBar width={style.width} />}
      </Motion>
    </OuterBar>
  );
}

const OuterBar = styled.div`
  background-color: whiteSmoke;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(208, 208, 208, 0.5) inset;
  width: 100%;
  height: 10px;
`;

const InnerBar = styled.span`
  display: block;
  width: ${props => props.width}%;
  height: 12px;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.primaryGreen};
`;
