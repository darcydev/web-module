import { css } from 'styled-components';

const sizes = {
  xs: 320,
  sm: 450,
  md: 768,
  lg: 1170,
  xl: 1440
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
