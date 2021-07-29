import styled, {css} from 'styled-components'

export const Wrapper = styled.input`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.midGray};
    border-radius: 4px;
    padding: 11px ${theme.spacings.xsmall};
    min-height: 45px;
    transition: border-color 0.3s ease, transform 0.3s ease;

    &:hover,
    &:focus {
      border-color: ${theme.colors.primary};
      transform: scale(1.02);
    }
  `}
`
