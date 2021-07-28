import {css} from 'styled-components'

const Typography = css`
  body {
    font-family: ${({theme}) => theme.text.font};
    font-size: 1rem;
    line-height: 1.6;
    color: ${({theme}) => theme.colors.gray};
  }
  p {
    margin-bottom: 1.15rem;
    font-size: 1em;
  }
  a {
    color: currentColor;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.2;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1rem;
  }
  small {
    font-size: 0.833rem;
  }
  @media (min-width: 576px) {
    h1 {
      font-size: 2.6rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.44rem;
    }
    h4 {
      font-size: 1.2rem;
    }
  }
`

export default Typography
