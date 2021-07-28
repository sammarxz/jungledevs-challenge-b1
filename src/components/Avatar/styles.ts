import styled, {css} from 'styled-components'

type wrapperProps = {
  hasBoxShadow: boolean
}

const wrapperModifiers = {
  boxShadow: () => css`
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  `,
}

export const Wrapper = styled.div<wrapperProps>`
  ${({theme, hasBoxShadow}) => css`
    display: inline-block;
    background-color: ${theme.colors.primary};
    background-size: cover;
    border-radius: 56px;
    width: 56px;
    height: 56px;
    overflow: hidden;
    border: 4px solid #fff;

    ${!!hasBoxShadow && wrapperModifiers.boxShadow()}

    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`
