import Image from 'next/image'

type LogoProps = {
  type?: 'text' | 'normal'
  className?: string
  width?: number
  height?: number
}

export function Logo({
  type = 'normal',
  width = 48,
  height = 64,
  className,
}: LogoProps) {
  return (
    <Image
      src={`/img/logo-${type}.svg`}
      alt={`Logo Hapu ${type}`}
      width={width}
      height={height}
      className={className}
    />
  )
}
