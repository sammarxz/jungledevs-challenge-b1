import Image from 'next/image'
import * as S from './styles'

export type avatarProps = {
  image: string
  alt: string
  hasBoxShadow?: boolean
  className?: string
}

export function Avatar({
  image,
  alt,
  hasBoxShadow = false,
  className,
}: avatarProps) {
  return (
    <S.Wrapper hasBoxShadow={hasBoxShadow} className={className}>
      <Image src={image} alt={alt} width={56} height={56} />
    </S.Wrapper>
  )
}
