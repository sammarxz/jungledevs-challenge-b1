import {screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {renderWithTheme} from '../../utils/tests/helpers'

import {Input} from '.'

describe('<Input />', () => {
  it('should render a default input', () => {
    renderWithTheme(<Input />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
  it('should render with placeholder', () => {
    renderWithTheme(<Input placeholder="Your Name" />)

    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
  })
  it('changes its value when typing', async () => {
    const onChange = jest.fn()
    renderWithTheme(<Input onChange={onChange} />)

    const input = screen.getByRole('textbox')
    const text = 'Sam Marxz'
    userEvent.type(input, text)

    expect(input).toHaveValue(text)
    expect(onChange).toHaveBeenCalledTimes(text.length)
  })
})
