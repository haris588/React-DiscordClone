import styled from 'styled-components'

export const Container = styled.nav`
    grid-column: span 12;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#fff;
    z-index: 500;
    position:relative;
`

export const Group = styled.div`
    display:flex;
    text-align:center;
    font-size:16px;
    line-height:140%;
    font-weight:600;
    
`

export const Logo = styled.img`
    max-width:100%;
`

export const Spacer = styled.div`
    width:100%;
    height:1px;
    background:#ebedef;
    margin-top:24px;
    margin-bottom:16px;
`

export const Backdrop = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,.3);
    z-index:9999;
    opacity:1;
`

export const Panel = styled.div`
    background:#fff;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 24px 48px 120px 24px;
    overflow-y: scroll;
    position: fixed;
    top: 0; 
    right: 0;
    bottom: 0;
   
    width: 330px;
    transform: translate(400px);
    z-index: 9999;
    transition: transform .3s ease;
    display:flex;
    flex-direction:column;
    opacity: 0;
    ${props => props.isVisible ? 'transform: translate(0); opacity:1;' : ''}
`

export const Footer = styled.footer`
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    height:120px;
    display:flex;
    flex-direction: column;
    justify-content:flex-end;
`

export const ButtonWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    padding: 24px;
`