import {
  screen,
  fireEvent,
  waitFor,
  act,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {renderWithTheme} from '../../utils/tests/helpers'

import {Newsletter} from '.'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        detail: 'Ok.',
      }),
  }),
)

describe('<Newsletter />', () => {
  it('should render a form by default', () => {
    renderWithTheme(<Newsletter />)

    const nameInput = screen.getByPlaceholderText('Your Name')
    const emailInput = screen.getByPlaceholderText('Your Email')
    const submitButton = screen.getByRole('button', {name: 'Send'})

    expect(screen.getByRole('form')).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
  it('the form must not be sent when no data is passed', () => {
    renderWithTheme(<Newsletter />)

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(screen.getByText(/Send/)).toBeInTheDocument()
  })
  it('should be return an success message when form is submitted with correct data', async () => {
    renderWithTheme(<Newsletter />)

    const form = screen.getByRole('form')
    const nameInput = screen.getByPlaceholderText('Your Name')
    const emailInput = screen.getByPlaceholderText('Your Email')

    userEvent.type(nameInput, 'Sam Marxz')
    userEvent.type(emailInput, 'sam_testin@gmail.com')

    fireEvent.submit(form)

    await waitFor(async () => {
      await expect(screen.getByAltText(/Success/)).toBeInTheDocument()
    })
  })
})
