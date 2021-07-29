import * as S from './styles'

type inputProps = React.InputHTMLAttributes<HTMLInputElement> & {}

export function Input(props: inputProps) {
  return <S.Wrapper {...props} />
}
