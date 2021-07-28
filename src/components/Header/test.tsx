import {screen} from '@testing-library/react'
import {renderWithTheme} from '../../utils/tests/helpers'

import {Header} from '.'

describe('<Header />', () => {
  it('should render with secondary color by default', () => {
    renderWithTheme(
      <Header>
        <h1>Welcome to the Jungle</h1>
      </Header>,
    )

    expect(screen.getByRole('banner')).toHaveStyle({
      padding: '9rem 0px 4rem 0px',
      'background-color': 'rgb(94, 32, 164)',
    })
  })
  it('should render with primary color', () => {
    renderWithTheme(
      <Header color="primary">
        <h1>Welcome to the Jungle</h1>
      </Header>,
    )

    expect(screen.getByRole('banner')).toHaveStyle({
      'background-color': 'rgb(0, 168, 112)',
    })
  })
  it('should render the children', () => {
    renderWithTheme(
      <Header color="primary">
        <h1>Welcome to the Jungle</h1>
      </Header>,
    )

    expect(
      screen.getByRole('heading', {name: /Welcome to the Jungle/}),
    ).toBeInTheDocument()
  })
})
