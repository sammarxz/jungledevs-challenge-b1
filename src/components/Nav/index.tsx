import Link from 'next/link'

import * as S from './styles'

import {Logo, Button} from '../'

export function Nav() {
  const menuOptions = [
    {
      name: 'Create Your Nanny Share',
      url: '#',
    },
    {
      name: 'Browse Shares',
      url: '#',
    },
    {
      name: 'Our Story',
      url: '#',
    },
  ]

  return (
    <S.Wrapper>
      <div className="d--flex ai--center">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <ul className="d--flex ml--large hide--mb">
          {menuOptions.map(({name, url}) => (
            <li key={name} className="mr--medium">
              <Link href={url}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="d--flex">
        <Link href="#">
          <a>
            <Button>Become a Nanny Share Host</Button>
          </a>
        </Link>
        <Button color="transparent" className="ml--xxsmall hide--mb">
          Sign In
        </Button>
      </div>
    </S.Wrapper>
  )
}
