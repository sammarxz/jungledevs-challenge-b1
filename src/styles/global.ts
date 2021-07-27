import {createGlobalStyle} from 'styled-components'

import Reset from 'styles/Reset'
import Typography from 'styles/Typography'

import {Colors, Flex, Positions, Spacings, Text} from 'styles/Helpers'

const GlobalStyle = createGlobalStyle`
/* BASE */
${Reset}
${Typography}

/* HELPERS */
${Colors}
${Flex}
${Positions}
${Spacings}
${Text}
`

export default GlobalStyle
