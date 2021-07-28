import {renderWithTheme} from '../../utils/tests/helpers'

import theme from '../../styles/theme'

import {Container} from '.'

describe('<Container />', () => {
  it('should render the normal size by default', () => {
    const {container} = renderWithTheme(<Container />)

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.container.normal,
    )
  })

  it('should render the large size by default', () => {
    const {container} = renderWithTheme(<Container size="large" />)

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.container.large,
    )
  })
})
