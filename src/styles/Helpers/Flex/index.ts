import {css} from 'styled-components'
import media from 'styled-media-query'

const Flex = css`
  ${({theme}) => css`
    .d--flex {
      display: flex;
    }
    .ai--center {
      align-items: center;
    }
    .ai--start {
      align-items: flex-start;
    }
    .jc--space-between {
      justify-content: space-between;
    }
    .jc--center {
      justify-content: center;
    }
    .fw--wrap {
      flex-wrap: wrap;
    }
    .wrap {
      flex-direction: column;
      grid-gap: ${theme.spacings.xxsmall};

      ${media.greaterThan('medium')`
        flex-direction: row;
        grid-gap: 0;
      `};
    }
  `}
`

export {Flex}
