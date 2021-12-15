import { useEffect, useState } from 'react'
import { DashboardBackground, BodyContainer, InlineTitle, InlineContainer } from './dashboard.styles'
import useAuth from 'hooks/useAuth'
import Header from '../../components/Header'
import Card from 'components/Card'
import Input from 'components/Input'
import Button from 'components/Button'
import { request } from '../../services/resources/pix'

import Statement from './Statement'

const Dashboard = () => {
  const { user, getCurrentUser } = useAuth()
  const wallet = user?.wallet || 0

  const [key, setKey] = useState('')
  const [generatedKey, setGeneratedKey] = useState('')
  const [value, setValue] = useState('')

  const handleRequestNewPayment = async () => {
    const { data } = await request(+value)

    if (data.copyPasteKey) {
      setGeneratedKey(data.copyPasteKey)
    }
  }

  const handlePayPix = () => {
    //
  }

  useEffect(() => {
    getCurrentUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!user) {
    return null
  }

  return (
    <DashboardBackground>
      <Header />
      <BodyContainer>
        <div>
          <Card noShadow width='90%'>
            <InlineTitle>
              <h2 className='h2'>Saldo atual</h2>
            </InlineTitle>
            <InlineContainer>
              <h3 className='wallet'>{wallet.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
            </InlineContainer>
          </Card>
          <Card noShadow width='90%'>
            <InlineTitle>
              <h2 className='h2'>Receber Pix</h2>
            </InlineTitle>
            <InlineContainer>
              <Input value={value} onChange={e => setValue(e.target.value)} placeholder='Valor' />
              <Button onClick={handleRequestNewPayment}>
                Gerar Código
              </Button>
            </InlineContainer>
            {generatedKey && (
              <>
                <p className='primary-color'>Pix Copia e Cola</p>
                <p className='primary-color'>{generatedKey}</p>
              </>
            )}
          </Card>
          <Card noShadow width='90%'>
            <InlineTitle>
              <h2 className='h2'>Pagar Pix</h2>
            </InlineTitle>
            <InlineContainer>
              <Input
                value={key}
                onChange={e => setKey(e.target.value)}
                placeholder='Insira a Chave Pix'
              />
              <Button onClick={handlePayPix}>
                Pagar Pix
              </Button>
            </InlineContainer>
          </Card>
        </div>
        <div>
          <Card noShadow width='90%'>
            <InlineTitle>
              <h2 className='h2'>Extrato da conta</h2>
            </InlineTitle>
            <Statement />
          </Card>
        </div>
      </BodyContainer>
    </DashboardBackground>
  )
}
export default Dashboard
