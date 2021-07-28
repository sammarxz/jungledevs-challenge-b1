import {renderWithTheme} from '../../utils/tests/helpers'

import {Nav} from '.'

describe('<Nav />', () => {
  it('should render the render and return propper styles', () => {
    const {container} = renderWithTheme(<Nav />)

    expect(container.firstChild).toHaveStyle({
      position: 'absolute',
    })
  })
})
