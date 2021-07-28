import {renderWithTheme} from '../../utils/tests/helpers'

import {Footer} from '.'

describe('<Footer />', () => {
  it('should render the render and return propper styles', () => {
    const {container} = renderWithTheme(<Footer />)

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
    })
  })
})
