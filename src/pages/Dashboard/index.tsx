import { DashboardBackground, BodyContainer, InlineTitle, InlineContainer } from './dashboard.styles'

import Header from '../../components/Header'
import Card from 'components/Card'
import Input from 'components/Input'
import Button from 'components/Button'

const Dashboard = () => {
  const wallet = 5000
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
          </Card>
        </div>
      </BodyContainer>
    </DashboardBackground>
  )
}
export default Dashboard
