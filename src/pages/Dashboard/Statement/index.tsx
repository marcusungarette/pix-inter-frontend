import { useState, useEffect } from 'react'
import { StatementItemContainer, StatementItemInfo, StatementContainer, StatementItemImage } from './statement.styles'
import { transactions } from '../../../services/resources/pix'
import { FiDollarSign } from 'react-icons/fi'
import { format } from 'date-fns'

interface StatementItemInterface {
  user: {
      firstName: string,
      lastName: string
  },
  value: number,
  type: 'paid' | 'received',
  updatedAt: Date
}

const StatementItem = ({ user, value, type, updatedAt }: StatementItemInterface) => {
  const PayedOrReceived = type === 'paid' ? 'Pago a ' : 'Recebido de'
  return (
    <StatementItemContainer>
      <StatementItemImage type={type}>
        <FiDollarSign size={24} />
      </StatementItemImage>
      <StatementItemInfo>
        <p className='primary-color'>
          {value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
        </p>
        <p className=''>{PayedOrReceived.toUpperCase()} <strong>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</strong></p>
        <p className=''>{format(new Date(updatedAt), "dd/MM/yyyy 'às' HH:mm'h'")}</p>
      </StatementItemInfo>
    </StatementItemContainer>
  )
}

const Statement = () => {
  const [statements, setStatements] = useState<StatementItemInterface[]>([])

  const getAllTransactions = async () => {
    const { data } = await transactions()
    setStatements(data.transactions)
  }

  useEffect(() => {
    getAllTransactions()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StatementContainer>
      {statements.length > 0 && statements.map((statement) => <StatementItem {...statement} key={statement.value} />)}
    </StatementContainer>
  )
}

export default Statement
