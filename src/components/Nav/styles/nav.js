import styled from 'styled-components'

export const Container = styled.nav`
    grid-column: span 12;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#fff;
    position:relative;
    z-index: 500;
    ${props => props.desktop ? 'padding: 16px 0;' : ''}
`

export const Group = styled.div`
    display:flex;
    font-weight:600;

    ${props => props.mobileNavGroup ? ` 
    flex-direction:column;
    overflow-y:scroll;
 
     
     `  : ''}
`

export const Logo = styled.img`
    max-width:100%;
    object-fit:contain;
`

export const Spacer = styled.div`
    width:100%;
    padding:1px;
    background:#ebedef;
    margin-top:22px;
    margin-bottom:22px;
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
    position: fixed;
    top: 0; 
    right: 0;
    bottom: 0;
    background:#fff;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 24px 48px 80px 24px;
    overflow:hidden;
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
    padding: 12px;
  
`