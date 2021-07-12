import styled from "styled-components"

export const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    background: ${props => props.grey ? '#f6f6f6' : props.dark ? '#23272a' : '#fff'};
    padding-top:${props => props.firstTile ? '47px' : props.footer ? '80px' : ''};
    padding-bottom:${props => props.lastTile ? '80px' : ''};
    
    ${props => props.mobile ? `
    @media (min-width:1024px){
        display: none;
    }
    ` : props.desktop ? `  @media (max-width:1023px){
        display: none;
    }` : ''}
    

    @media (max-width: 400px){
        padding-top: ${props => props.firstTile ? '40px' : ''};
    }

    @media (min-width: 400px) and (max-width: 780px){
        padding-top: ${props => props.firstTile ? '155px' : ''};
    }
  
`

export const Row = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0 20px;
    padding: 0 24px;
    max-width: 1260px;
    transition: opacity .6s, transform .6s ease;
    ${props => props.isVisible ? 'opacity:1;  transform: translateY(0);' : ''};
    ${props => props.isInvis ? 'opacity:0;  transform: translateY(50px);' : ''};
    padding-top: ${props => props.container ? '56px' : '0'};
    padding-bottom: ${props => props.container ? '56px' : '0'};
    
    @media (min-width: 768px) and (max-width: 1024px){
        grid-template-columns: repeat(8, 1fr);
        padding: 0 40px;
        padding-top: ${props => props.container ? '80px' : ''};
        padding-bottom: ${props => props.container ? '80px' : ''};
    }

    @media (min-width: 1024px){
        grid-template-columns: repeat(12, 1fr);
        padding-top: ${props => props.container ? '120px' : ''};
        padding-bottom: ${props => props.container ? '120px' : ''};
    }
`
export const Group = styled.div`
    grid-column: 1 / -1;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

export const Seperator = styled.div`
    grid-column: 1 / -1;
    background: #5865f2;
    width:100%;
    height:1px;
    margin-bottom:32px;
`

export const Spacer = styled.div`
    grid-column: span 1;
    grid-row-end: span 2;
    display: initial;
`