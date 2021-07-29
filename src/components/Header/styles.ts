import styled, {css, DefaultTheme} from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  color: 'primary' | 'secondary'
  bg?: string
}

const wrapperModifiers = {
  bg: (bg: string, theme: DefaultTheme) => {
    return css`
      background-image: url(${bg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      opacity: 0.2;
      mix-blend-mode: overlay;
      z-index: -1;
    `
  },
}

export const Wrapper = styled.header<WrapperProps>`
  ${({theme, color, bg}) => css`
    color: #fff;
    background-color: ${theme.colors[color]};
    background: linear-gradient(
      314.72deg,
      #c86dd7 -1.5%,
      #7e49c3 39.43%,
      #5912ac 86.02%
    );
    position: relative;
    padding: 9rem 0 4rem 0;
    mix-blend-mode: overlay;
    overflow: hidden;

    ${media.greaterThan('medium')`
      padding: 10rem 0 8rem 0;
    `}

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      pointer-events: none;
      ${!!bg && wrapperModifiers.bg(bg, theme)}
    }
  `}
`
