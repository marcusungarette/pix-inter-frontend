import { Wrapper, Background, ButtonContainer, InputContainer } from './signin-styles'
import background from '../../assets/images/background-login.jpg'
import logoInter from '../../assets/images/Inter-orange.png'

import Card from '../../components/Card'
import Input from 'components/Input'

const SignIn = () => {
  return (
    <Wrapper>
      <Background image={background} />

      <Card width='403px' height='auto'>
        <img src={logoInter} width={172} height={61} alt='logo inter' />

        <InputContainer>
          <Input placeholder='EMAIL' />
          <Input placeholder='SENHA' type='password' />
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
