import { AxiosResponse } from 'axios'
import { createContext, ReactNode, useState } from 'react'

import { signIn, signUp, SignInData, SignUpData, me } from '../services/resources/user'

interface AuthProviderProps {
  children: ReactNode;
}

interface UserDTO {
  id: string;
  firstName: string;
  lastName: string;
  accountNumber: number;
  accountDigit: number;
  wallet: number;
  email: string;
}

interface ContextData {
 user: UserDTO
 userSignIn: (userData: SignInData) => Promise<UserDTO>
 userSignUp: (userData: SignUpData) => Promise<UserDTO>
 me: () => Promise<AxiosResponse<UserDTO, any>>
}

export const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  const userSignIn = async (userData: SignInData) => {
    const { data } = await signIn(userData)

    if (data?.status === 'error') {
      return data
    }

    if (data.acessToken) {
      localStorage.setItem('@Inter:token', data.acessToken)
    }

    return getCurrentUser()
  }

  const getCurrentUser = async () => {
    const { data } = await me()
    setUser(data)
    return data
  }

  const userSignUp = async (userData: SignUpData) => {
    const { data } = await signUp(userData)
    localStorage.setItem('@Inter:token', data.acessToken)

    return getCurrentUser()
  }

  return (
    <AuthContext.Provider value={{ user, userSignIn, userSignUp, me }}>
      {children}
    </AuthContext.Provider>
  )
}