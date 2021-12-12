import { DashboardBackground, BodyContainer, InlineTitle } from './dashboard.styles'

import Header from '../../components/Header'
import Card from 'components/Card'

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
            <h3 className='wallet'>{wallet.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
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
