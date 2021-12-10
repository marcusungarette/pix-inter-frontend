import styled from 'styled-components'

export const DashboardBackground = styled.main`
    width: 100%;
    height: 100vh;
    display:flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
`
