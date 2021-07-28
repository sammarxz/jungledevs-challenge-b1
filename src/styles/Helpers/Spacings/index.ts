import {css} from 'styled-components'

const Spacings = css`
  .m--0 {
    margin: 0;
  }
  .p--0 {
    padding: 0;
  }
  .mt--0 {
    margin-top: 0;
  }
  .mr--0 {
    margin-right: 0;
  }
  .mb--0 {
    margin-bottom: 0;
  }
  .ml--0 {
    margin-left: 0;
  }
  .pt--0 {
    paddint-top: 0;
  }
  .pr--0 {
    padding-right: 0;
  }
  .pb--0 {
    padding-bottom: 0;
  }
  .pl--0 {
    padding-left: 0;
  }
  .mx--auto {
    margin-left: auto;
    margin-right: auto;
  }
  ${({theme}) =>
    Object.keys(theme.spacings).map(
      key => css`
        ${['top', 'right', 'bottom', 'left'].map(
          dir => css`
      .m${dir[0]}--${key}{
        margin-${dir}: ${theme.spacings[key]};
      }
      .p${dir[0]}--${key}{
        padding-${dir}: ${theme.spacings[key]};
      }
    `,
        )}
      `,
    )}
`

export {Spacings}
