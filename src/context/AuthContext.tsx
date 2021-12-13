import { createContext, ReactNode, useState } from 'react'

import { signIn, signUp, SignInData, SignUpData } from '../services/resources/user'

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
 userSignIn: (userData: SignInData) => void
 userSignUp: (userData: SignUpData) => void
}

export const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  const userSignIn = async (userData: SignInData) => {
    const { data } = await signIn(userData)
    localStorage.setItem('@Inter:token', data.acessToken)
  }

  const userSignUp = async (userData: SignUpData) => {
    const { data } = await signUp(userData)
    localStorage.setItem('@Inter:token', data.acessToken)
  }

  return (
    <AuthContext.Provider value={{ user, userSignIn, userSignUp }}>
      {children}
    </AuthContext.Provider>
  )
}
