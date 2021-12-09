import styled from 'styled-components'

export const Wrapper = styled.main`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Background = styled.div<{image: any}>`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 50vh;
    background-image: url(${props => props.image});
    background-size: contain;
    z-index: 1;
`
