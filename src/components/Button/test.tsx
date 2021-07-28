import {screen, cleanup, fireEvent} from '@testing-library/react'
import {renderWithTheme} from '../../utils/tests/helpers'

import {Button} from '.'

afterEach(cleanup)

describe('<Button />', () => {
  it('should render the default Button', () => {
    renderWithTheme(<Button>Jungle Devs</Button>)

    expect(screen.getByRole('button', {name: /Jungle Devs/})).toHaveStyle({
      padding: '12px 24px',
      'font-size': '0.95rem',
      'background-color': 'rgb(0, 168, 112)',
    })
  })

  it('shold render the secondary color', () => {
    renderWithTheme(<Button color="secondary">Secondary Button</Button>)

    expect(screen.getByRole('button', {name: /Secondary Button/})).toHaveStyle({
      'background-color': 'rgb(94, 32, 164)',
    })
  })

  it('should render the full width', () => {
    renderWithTheme(<Button isFullWidth>Full Width</Button>)

    expect(screen.getByRole('button')).toHaveStyle({
      width: '100%',
    })
  })

  it('should render a button with image', () => {
    const {container} = renderWithTheme(
      <Button
        color="secondary"
        icon={<img src="/img/icons/Calendar.svg" alt="calendar icon" />}
      >
        Become a Nanny Share Host
      </Button>,
    )

    const image = container.querySelector('img')

    expect(image).toBeInTheDocument()
    expect(image?.getAttribute('alt')).toBe('calendar icon')
  })

  it('should capture click', done => {
    function handleClick() {
      done()
    }

    const {getByText} = renderWithTheme(
      <Button onClick={handleClick}>Click Me</Button>,
    )

    const node = getByText(/Click Me/)
    fireEvent.click(node)
  })
})
