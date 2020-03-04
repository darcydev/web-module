import React from 'react';
import styled from 'styled-components';

export default function Info({
  heading = 'St Marys to Orange capacity upgrade',
  listContent = [
    '+45% population',
    '+4,218 people employed',
    '+$510m in GRP*',
    '+73.3% land value prices'
  ],
  paragraph
}) {
  const LIST_MARKUP = listContent.map(v => <li>{v}</li>);

  return (
    <StyledDiv>
      <StyledH1>{heading}</StyledH1>
      <ul>{LIST_MARKUP}</ul>
      <p>
        Sit id dolor dolor nostrud elit est aliquip est commodo. Nostrud enim
        sint voluptate proident. Eiusmod nostrud cupidatat fugiat reprehenderit
        velit esse labore fugiat sit ut. Dolore exercitation fugiat ea ex
        consectetur cupidatat consequat. Laborum duis nulla cillum exercitation
        Lorem proident anim deserunt pariatur adipisicing. Nulla elit do ullamco
        nisi laborum amet ipsum duis non velit aliquip cillum non enim. Enim
        dolore magna nulla officia ex veniam aliqua consequat in occaecat mollit
        quis.
      </p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 5px 10px;
  text-align: left;

  ul {
    list-style: none;
  }

  p {
    padding: 20px 0 0 0;
  }
`;

const StyledH1 = styled.h1`
  text-transform: capitalize;
`;
