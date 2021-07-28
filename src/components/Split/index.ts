import styled, {css, DefaultTheme} from 'styled-components'
import media from 'styled-media-query'

type splitProps = {
  invertOrder?: boolean
}

export const Split = styled.div<splitProps>`
  ${({theme, invertOrder}) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    grid-gap: ${theme.spacings.medium};
    text-align: center;

    h2 {
      margin-left: auto;
      margin-right: auto;
    }

    div {
      width: 100%;
      max-width: auto;

      ${invertOrder &&
      css`
        &:first-child {
          order: 1;
        }

        &:last-child {
          order: 0;
        }
      `}

      ${media.greaterThan('medium')`
        flex-direction: row;

        ${
          invertOrder &&
          css`
            &:first-child {
              order: 0;
            }

            &:last-child {
              order: 1;
            }
          `
        }
      `}
    }

    ${media.greaterThan('medium')`
      flex-direction: row;
      grid-gap: ${theme.spacings.xlarge};
      text-align: left;

      h2 {
        margin-left: 0;
        margin-right: 0;
      }
    `}
  `}
`
