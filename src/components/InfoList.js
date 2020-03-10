import React from 'react';
import styled from 'styled-components';

export default function InfoList({ heading, icon, listContent }) {
  const LIST_ITEMS_MARKUP = listContent.map(v => <li key={v}>{v}</li>);

  return (
    <StyledContainer>
      <StyledHeading>{heading}</StyledHeading>
      <div style={{ display: 'flex' }}>
        <StyledSpan>{icon}</StyledSpan>
        <StyledUL>{LIST_ITEMS_MARKUP}</StyledUL>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div``;

const StyledHeading = styled.h4`
  text-transform: uppercase;
`;

const StyledSpan = styled.div`
  margin: auto 0;

  span svg {
    font-size: 50px;
  }
`;

const StyledUL = styled.ul`
  margin: 0;
`;
