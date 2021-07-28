import {render} from '@testing-library/react'

import {Logo} from '.'

describe('<Logo />', () => {
  it('should render the normal logo by default', () => {
    const {getByAltText} = render(<Logo />)
    getByAltText('Logo Hapu normal')
  })
  it('should render the text version of the logo when the propper type is passed', () => {
    const {getByAltText} = render(<Logo type="text" />)
    getByAltText('Logo Hapu text')
  })
})
