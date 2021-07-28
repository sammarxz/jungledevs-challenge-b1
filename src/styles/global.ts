import {createGlobalStyle} from 'styled-components'

import Reset from 'styles/Reset'
import Typography from 'styles/Typography'

import {Colors, Displays, Flex, Positions, Spacings, Text} from 'styles/Helpers'

const GlobalStyle = createGlobalStyle`
/* BASE */
${Reset}
${Typography}

/* HELPERS */
${Colors}
${Displays}
${Flex}
${Positions}
${Spacings}
${Text}
`

export default GlobalStyle
