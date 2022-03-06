import styled from 'styled-components'

export const Main = styled.main`
padding: 10px;
height: 80vh;
margin: 10vh 0 10vh;
overflow-y: scroll;
display: flex;
flex-direction: column;


::-webkit-scrollbar {
    display: none;
}

`

export const Msg = styled.div`
display: flex;
align-items: flex-start;
width: fit-content;
max-width: 35rem;
margin-bottom: 1.2rem;
line-height: 2.4rem;
padding: 1rem 2rem;
border-radius: 2.5rem;
color: ${props => props.userClass ? '#fff' : '#fafafa'};
align-self: ${props => props.userClass && "flex-end"};
background-color: ${props => props.userClass ? "#0D1F22" : "#255135"};
flex-direction: ${props => props.userClass && "row-reverse"};
letter-spacing: .1rem;
font-weight: 200;
`

export const Text = styled.p`
text-align: ${props => props.userClass ? 'end' : 'start'};
margin: auto 5px;
`

export const Img = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
margin: 5px;
`