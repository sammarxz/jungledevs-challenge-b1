import {css} from 'styled-components'
import media from 'styled-media-query'

const Responsive = css`
  .hide--mb {
    display: none;

    @media (min-width: 930px) {
      display: inherit;
    }
  }
`

export {Responsive}
