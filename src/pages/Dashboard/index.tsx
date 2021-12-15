import { useEffect } from 'react'
import { DashboardBackground, BodyContainer, InlineTitle, InlineContainer } from './dashboard.styles'
import useAuth from 'hooks/useAuth'
import Header from '../../components/Header'
import Card from 'components/Card'
import Input from 'components/Input'
import Button from 'components/Button'
import Statement from './Statement'

const Dashboard = () => {
  const { user, getCurrentUser } = useAuth()
  const wallet = user?.wallet || 0

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
              <Input placeholder='Valor' />
              <Button>
                Gerar Código
              </Button>
            </InlineContainer>
            <p className='primary-color'>Pix Key - Come from API ##########################</p>
          </Card>
          <Card noShadow width='90%'>
            <InlineTitle>
              <h2 className='h2'>Pagar Pix</h2>
            </InlineTitle>
            <InlineContainer>
              <Input placeholder='Insira a Chave Pix' />
              <Button>
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
