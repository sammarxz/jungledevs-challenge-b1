import {renderWithTheme} from '../../utils/tests/helpers'

import {Avatar} from '.'

describe('<Avatar />', () => {
  it('should render the pased image', () => {
    const {getByAltText} = renderWithTheme(
      <Avatar image="/img/users/sarah.png" alt="Sarah" />,
    )

    getByAltText('Sarah')
  })

  it('should render with box Shadow', () => {
    const {container} = renderWithTheme(
      <Avatar image="/img/users/sarah.png" alt="Sarah" hasBoxShadow />,
    )

    expect(container.firstChild).toHaveStyle({
      'box-shadow': '0 1px 1px rgba(0,0,0,0.2)',
    })
  })
})
