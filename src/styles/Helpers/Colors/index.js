import {css} from 'styled-components'

const Colors = css`
  ${['top', 'right', 'bottom', 'left'].map(
    side => css`
    .b${side[0]}--1 {
      border-${side}: 1px solid;
    }
  `,
  )}
  ${({theme}) =>
    Object.keys(theme.colors).map(
      colorName => css`
        .bg--${colorName} {
          // @ts-ignore
          background-color: ${theme.colors[colorName]};
        }
        .c--${colorName} {
          color: ${theme.colors[colorName]};
        }
        .bc--${colorName} {
          border-color: ${theme.colors[colorName]};
        }
      `,
    )}
`

export {Colors}
