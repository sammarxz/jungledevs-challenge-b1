import styled, {css, DefaultTheme} from 'styled-components'

import theme from 'styles/theme'

type ContainerProps = {
  theme: DefaultTheme
  size?: keyof typeof theme.container
}

const containerModifier = {
  width: (theme: DefaultTheme, size: string) => css`
    max-width: ${theme.container[size]};
  `,
}

export const Container = styled.div<ContainerProps>`
  ${({theme, size = 'normal'}) => css`
    margin: 0 auto;
    padding-left: ${theme.spacings.xsmall};
    padding-right: ${theme.spacings.xsmall};
    ${!!size && containerModifier.width(theme, size)}
  `}
`
