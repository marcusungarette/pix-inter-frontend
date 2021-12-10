import { Wrapper, Background, ButtonContainer, InputContainer } from './signin-styles'
import background from '../../assets/images/background-login.jpg'
import logoInter from '../../assets/images/Inter-orange.png'

import Card from '../../components/Card'

const SignIn = () => {
  return (
    <Wrapper>
      <Background image={background} />

      <Card width='403px' height='auto'>
        <img src={logoInter} width={172} height={61} alt='logo inter' />

        <InputContainer>
          <h2>email</h2>
          <p>senha</p>
        </InputContainer>

        <ButtonContainer>
          <p>botao</p>
          <p>Ainda não tem cadastro?</p>
        </ButtonContainer>
      </Card>

    </Wrapper>
  )
}
export default SignIn
