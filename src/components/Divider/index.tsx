import styled, {css} from 'styled-components'
import media from 'styled-media-query'

export const Divider = styled.div`
  ${({theme}) => css`
    background-color: ${theme.colors.midGray};
    width: 100%;
    height: 2px;
    margin: ${theme.spacings.small} auto;

    ${media.greaterThan('medium')`
      width: 784px;
      margin: ${theme.spacings.medium} auto;
    `}
  `}
`
