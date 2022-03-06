import styled from 'styled-components'

export const PopUpBackground = styled.div`
background: rgba(0,0,0, 0.6);
position: absolute;
top: 0 ;
left:0 ;
z-index: 9999;
width: 100%;
height: 100%;
`
export const PopUpContainer = styled.div`
width: 100% ;
height: 100% ;
display: flex;
flex-direction: column ;
justify-content: center ;
align-items: center;
gap: 4rem;
`
export const PopUpTitle = styled.h1`
color: #fafafa ;
font-weight: 200 ;
font-size: 4rem;
`
export const PopUpBody = styled.div`
display: flex ;
gap: 4rem ;
@media (max-width: 990px) {
    flex-direction: column;
  }
`

export const PopUpBtnClose = styled.button`
background-color: transparent ;
`
export const Close = styled.img``
export const Icons = styled.img``
