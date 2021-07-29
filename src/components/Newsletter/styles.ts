import styled, {css} from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.form`
  ${({theme}) => css`
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.large};
    `}

    input,
    button {
      width: 100%;
      margin-bottom: ${theme.spacings.xxsmall};

      ${media.greaterThan('medium')`
        width: auto;
        margin-bottom: 0;
      `}
    }
  `}
`
