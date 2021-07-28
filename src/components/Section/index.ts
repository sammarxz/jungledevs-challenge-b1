import styled, {css} from 'styled-components'
import media from 'styled-media-query'

export const Section = styled.section`
  ${({theme}) => css`
    padding: ${theme.spacings.large} 0;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xxlarge} 0;
    `}
  `}
`
