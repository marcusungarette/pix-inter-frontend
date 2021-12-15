
import { useState } from 'react'
import { Wrapper, Background, ButtonContainer, InputContainer } from './signin-styles'
import background from '../../assets/images/background-login.jpg'
import logoInter from '../../assets/images/Inter-orange.png'

import Card from '../../components/Card'
import Input from 'components/Input'
import Button from 'components/Button'
import { Link, useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { userSignIn } = useAuth()

  const handleToSingIn = async () => {
    const data = {
      email,
      password,
    }

    const response = await userSignIn(data)

    if (response.id) {
      navigate('/dashboard')
      return
    }
    alert('Usuario ou senha invalido')
  }

  return (
    <Wrapper>
      <Background image={background} />

      <Card width='403px' height='auto'>
        <img src={logoInter} width={172} height={61} alt='logo inter' />

        <InputContainer>
          <Input placeholder='EMAIL' value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder='SENHA' type='password' value={password} onChange={e => setPassword(e.target.value)} />
        </InputContainer>

        <ButtonContainer>
          <Button type='button' onClick={handleToSingIn}>ENTRAR</Button>
          <p>Ainda não tem cadastro?</p> <Link to='/signup'>Cadastre-se Já</Link>
        </ButtonContainer>
      </Card>

    </Wrapper>
  )
}
export default SignIn
