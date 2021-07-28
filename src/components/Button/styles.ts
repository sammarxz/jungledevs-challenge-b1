import styled, {css, DefaultTheme} from 'styled-components'
import {ButtonProps} from '.'

type WrapperProps = {
  hasIcon: boolean
  isOnlyIcon: boolean
} & Pick<ButtonProps, 'color' | 'isFullWidth'>

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    display: inline-flex;
    align-items: center;

    svg,
    img,
    div {
      & + span {
        text-align: left;
        margin-left: ${theme.spacings.xsmall};
      }
    }
  `,
  onlyIcon: () => css`
    width: 48px;
    height: 48px;
    border-radius: 48px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,
}

export const Wrapper = styled.button<WrapperProps>`
  ${({theme, color, isFullWidth, hasIcon, isOnlyIcon}) => css`
    background-color: ${theme.colors[color!]};
    color: ${theme.colors.white};
    padding: 12px ${theme.spacings.small};
    border-radius: calc(${theme.spacings.xxsmall} / 2);
    font-size: 0.95rem;
    font-weight: 500;

    ${!!isFullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!isOnlyIcon && wrapperModifiers.onlyIcon()}
  `}
`
