import styled from 'styled-components'
import media from 'styled-media-query'

export const Split = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  grid-gap: ${({theme}) => theme.spacings.small};

  div {
    width: 100%;
    max-width: auto;

    ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  }

  ${media.greaterThan('medium')`
    flex-direction: row;
    grid-gap: ${({theme}) => theme.spacings.xlarge};
  `}
`
