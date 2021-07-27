import Image from 'next/image'

type LogoProps = {
  type: 'text' | 'normal'
}

export function Logo({type}: LogoProps) {
  return (
    <Image
      src={`/img/logo-${type}.svg`}
      alt="something great to show"
      layout="fill"
    />
  )
}
