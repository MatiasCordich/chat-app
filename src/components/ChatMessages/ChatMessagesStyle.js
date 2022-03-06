import styled from 'styled-components';


export const Form = styled.form`
height: 10vh;
position: fixed;
bottom: 0;
background-color: #181717;
width: 100%;
max-width: 80rem;
display: flex;
font-size: 1.8rem;
`

export const SendBtn = styled.button`
width: 12rem;
background-color: #023C40;
display:flex;
justify-content:center;
align-items:center;
gap: 1rem ;
`

export const SendImg = styled.img``

export const InputMsg = styled.input`
line-height: 1.5;
width: 100%;
font-size: 2rem;
background-color: #29292a;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23403d45' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
color: #fafafa;
outline: none;
border: none;
padding: 0 10px;
`