import { Wrapper, Background, ButtonContainer, InputContainer } from './signin-styles'
import background from '../../assets/images/background-login.jpg'
import logoInter from '../../assets/images/Inter-orange.png'

import Card from '../../components/Card'
import Input from 'components/Input'
import Button from 'components/Button'
import { Link } from 'react-router-dom'

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
          <Button type='button' onClick={() => true}>ENTRAR</Button>
          <p>Ainda não tem cadastro?</p> <Link to='/signup'>Cadastre-se Já</Link>
        </ButtonContainer>
      </Card>

    </Wrapper>
  )
}
export default SignIn
