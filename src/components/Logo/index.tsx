import Image from 'next/image'

type LogoProps = {
  type?: 'text' | 'normal'
  className?: string
}

export function Logo({type = 'normal', className}: LogoProps) {
  return (
    <Image
      src={`/img/logo-${type}.svg`}
      alt={`Logo Hapu ${type}`}
      layout="fill"
      className={className}
    />
  )
}
