import styled, {css} from 'styled-components'
import media from 'styled-media-query'

export const Section = styled.section`
  ${({theme}) => css`
    padding: ${theme.spacings.large} 0;

    ${media.greaterThan('medium')`
      padding: calc(${theme.spacings.xxlarge} * 1.4) 0;
    `}
  `}
`
