import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      gray: string
      midGray: string
      lightGray: string
      white: string
      black: string
    }
    text: {
      font: string
      weights: string[]
    }
    spacings: number[]
  }
}
