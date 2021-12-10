import { CardContainer } from './card-styles'

interface CardProps {
    width?: string,
    // eslint-disable-next-line no-undef
    children?: React.ReactNode;
    height?: string,
    noShadow?: boolean
}

const Card = ({
  children,
  width = '100%',
  height = 'auto',
  noShadow = false,
}: CardProps) => {
  return (
    <CardContainer width={width} height={height} noShadow={noShadow}>
      {children}
    </CardContainer>
  )
}

export default Card
