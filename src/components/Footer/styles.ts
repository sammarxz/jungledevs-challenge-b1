import styled, {css} from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    grid-gap: ${theme.spacings.xsmall};
    position: relative;

    ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  `}
`

export const Links = styled.ul`
  position: relative;

  ${media.greaterThan('medium')`
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
  `}
`

export const SocialButton = styled.a`
  ${({theme}) => css`
    height: 46px;
    width: 46px;
    border-radius: 46px;
    border: 1px solid ${theme.colors.midGray};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 ${theme.spacings.xxsmall};
  `}
`

export const Copy = styled.p`
  ${({theme}) => css`
    border-top: 1px solid ${theme.colors.midGray};
    margin-top: ${theme.spacings.medium};
    opacity: 0.6;
    padding-top: ${theme.spacings.xsmall};
    text-align: center;

    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.xlarge};
      border: none;
      padding: 0;
    `}
  `}
`
