import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './button-styles'

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ButtonContainer {...props}>
      {props.children}
    </ButtonContainer>
  )
}

export default Button
