import React from 'react';
import styled from 'styled-components';

export default function InfoBox({ content }) {
  return (
    <StyledDiv>
      <StyledH1>{content}</StyledH1>
      <p>
        Tempor dolor nisi nisi in culpa voluptate laboris ut. Anim enim eiusmod
        sint ea. Sunt culpa laborum veniam eiusmod adipisicing commodo.
        Consequat ipsum ad consectetur ea. Excepteur anim minim deserunt nostrud
        nisi consectetur dolore pariatur excepteur duis.
      </p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 5px 10px;
  text-align: left;
`;

const StyledH1 = styled.h1`
  text-transform: capitalize;
`;
