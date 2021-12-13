import api from '../api'

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signIn = async (data: SignInData) => {
  return await api.post('/user/signin', data)
}

export const me = async () => {
  return await api.get('/user/signup')
}

export const signUp = async (data: SignUpData) => {
  return await api.post('/user/signup', data)
}
