import {renderWithTheme} from '../../utils/tests/helpers'

import {Split} from '.'

describe('<Split />', () => {
  it('should render the render and return propper styles', () => {
    const {container} = renderWithTheme(<Split />)

    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      'flex-direction': 'column',
    })
  })
})
