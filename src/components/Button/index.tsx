import * as S from './styles'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary'
  isFullWidth?: boolean
  icon?: JSX.Element
}

export function Button(props: ButtonProps) {
  return (
    <S.Wrapper
      color={props.color || 'primary'}
      isFullWidth={props.isFullWidth}
      hasIcon={!!props.icon}
      isOnlyIcon={!props.children && !!props.icon}
      {...props}
    >
      {props.icon}
      {!!props.children && <span>{props.children}</span>}
    </S.Wrapper>
  )
}
