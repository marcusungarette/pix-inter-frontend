
import { CircleContainer } from './usercircle-styles'

interface UserInfo {
    initials: string;
}

const UserCircle = ({ initials }: UserInfo) => {
  return (
    <CircleContainer>
      {initials}
    </CircleContainer>
  )
}

export default UserCircle
