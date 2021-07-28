import {renderWithTheme} from '../../utils/tests/helpers'

import {Section} from '.'

describe('<Section />', () => {
  it('should render the render and return propper styles', () => {
    const {container} = renderWithTheme(<Section>Something</Section>)

    expect(container.firstChild).toHaveStyle({
      padding: '40px 0px',
    })
  })
})
