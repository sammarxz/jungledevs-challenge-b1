import styled, {css, DefaultTheme} from 'styled-components'

import {HeaderProps} from '.'

type WrapperProps = {
  color: string
  bg?: string
}

const wrapperModifiers = {
  bg: (color: string, theme: DefaultTheme) => {
    if (color === 'primary') {
      return css`
        background: ${theme.colors.primary};
      `
    }

    return css`
      background: linear-gradient(
        314.72deg,
        #c86dd7 -1.5%,
        #7e49c3 39.43%,
        #5912ac 86.02%
      );
      opacity: 0.8;
      z-index: -1;
    `
  },
}

export const Wrapper = styled.header<WrapperProps>`
  ${({theme, color, bg}) => css`
    color: #fff;
    background-color: ${theme.colors[color]};
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    padding: 16vw 0;
    mix-blend-mode: overlay;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      pointer-events: none;
      ${!!bg && wrapperModifiers.bg(color, theme)}
    }
  `}
`
