import {css} from 'styled-components'

const Spacings = css`
  .m--0 {
    margin: 0;
  }
  .p--0 {
    padding: 0;
  }
  ${({theme}) =>
    theme.spacings.map(
      size => css`
        ${['top', 'right', 'bottom', 'left'].map(
          dir => css`
      .m${dir[0]}--${size}{
        margin-${dir}: ${size}px;
      }
      .p${dir[0]}--${size}{
        padding-${dir}: ${size}px;
      }
    `,
        )}
      `,
    )}
`

export {Spacings}
