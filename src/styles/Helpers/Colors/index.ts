import {css} from 'styled-components'

const Colors = css`
  ${({theme}) =>
    Object.keys(theme.colors).map(
      (colorName: string) => css`
        .bg--${colorName} {
          background-color: ${theme.colors[colorName]};
        }
        .c--${colorName} {
          color: ${theme.colors[colorName]};
        }
      `,
    )}
`

export {Colors}
