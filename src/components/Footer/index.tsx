import Link from 'next/link'
import Image from 'next/image'
import * as S from './styles'

import {Logo} from '../'

type footerProps = {
  className?: string
}

export function Footer({className}: footerProps) {
  const footerMenu = [
    {
      name: 'Share Your Nanny',
      url: '#',
    },
    {
      name: 'Our Story',
      url: '#',
    },
    {
      name: 'Blog',
      url: '#',
    },
    {
      name: 'Terms & Privacy',
      url: '#',
    },
  ]
  const socialMedia = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
    },
  ]

  return (
    <>
      <S.Wrapper className={className}>
        <Link href="/">
          <a>
            <Logo type="text" width={64} height={24} />
          </a>
        </Link>
        <S.Links className="d--flex fw--wrap jc--center">
          {footerMenu.map(({name, url}) => (
            <li
              key={name}
              className="ml--xxsmall mr--xxsmall fw--wrap pt--xxsmall pb--xxsmall"
            >
              <Link href={url}>
                <a className="fw--500">{name}</a>
              </Link>
            </li>
          ))}
        </S.Links>
        <ul className="d--flex">
          {socialMedia.map(({name, url}) => (
            <li key={name}>
              <S.SocialButton
                href={url}
                target="_blank"
                rel="noreferrer"
                title={name}
              >
                <Image
                  src={`/img/icons/${name}.svg`}
                  alt={name}
                  width={20}
                  height={20}
                />
              </S.SocialButton>
            </li>
          ))}
        </ul>
      </S.Wrapper>
      <S.Copy>Copyright © 2017 Hapu PTY Limited All rights reserved</S.Copy>
    </>
  )
}
