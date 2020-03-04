import React from 'react';
import styled from 'styled-components';

export default function Info() {
  return (
    <StyledContainer>
      <p>
        Economic modelling shows ONE HOUR is the accepted business/commute time.
        <br />
        <br />
        Research shows people will travel TWO HOURS for a social interaction.
      </p>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding: 5px 10px;

  p {
    text-align: left;
  }
`;
