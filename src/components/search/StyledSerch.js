import styled from 'styled-components'
import border from '@c/styled/border'

const Container = styled.div`
    padding: .1rem .15rem;
    background-color: ${props => props.outerBg};
   
`

const InnerContainer = border(
 styled.div `
    display: flex;
    height: .4rem;
    border-radius: .06rem;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.innerBg};
    span {
        color: #666;
    }
  `
)

export {
    Container,
    InnerContainer
}