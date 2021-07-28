import styled, {css} from 'styled-components'
import media from 'styled-media-query'

export const Divider = styled.div`
  ${({theme}) => css`
    background-color: ${theme.colors.midGray};
    width: 100%;
    height: 2px;
    margin: 0 auto;

    ${media.greaterThan('medium')`
      width: 800px;
    `}
  `}
`
