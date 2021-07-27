import {render, screen} from '@testing-library/react'

import {Logo} from '.'

describe('<Logo />', () => {
  it('should render the Logo component', () => {
    render(<Logo type="normal" />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
