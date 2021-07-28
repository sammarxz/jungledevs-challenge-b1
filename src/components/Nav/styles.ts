import styled, {css} from 'styled-components'

export const Wrapper = styled.nav`
  ${({theme}) => css`
    position: absolute;
    top: 0;
    left: ${theme.spacings.xsmall};
    right: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-weight: 500;

      &:hover {
      }
    }
  `}
`
