import * as S from './styles'

export type HeaderProps = {
  children: JSX.Element
  color: 'primary' | 'secondary'
  bgImage?: string
  className?: string
}

export function Header({
  children,
  color = 'secondary',
  bgImage,
  className,
}: HeaderProps) {
  return (
    <S.Wrapper color={color} bg={bgImage} className={className}>
      {children}
    </S.Wrapper>
  )
}
