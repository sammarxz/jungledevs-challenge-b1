import {css} from 'styled-components'

const Text = css`
  ${({theme}) =>
    Object.keys(theme.text.sizes).map(
      key => css`
        .fs--${key} {
          font-size: ${theme.text.sizes[key]};
        }
      `,
    )}
  .tt--uppercase {
    text-transform: uppercase;
  }
  .td--underline {
    text-decoration: underline;
  }
  .ta--center {
    text-align: center;
  }
  .fw--500 {
    font-weight: 500;
  }
  .fw--400 {
    font-weight: 400;
  }
`

export {Text}
