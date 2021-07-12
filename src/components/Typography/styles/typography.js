import styled from "styled-components"

export const H1 = styled.h1`
    font-family: 'Helvetica';
    font-weight: 800;
    font-size: clamp(32px,5vw,44px);
    line-height: 95%;
    text-transform: uppercase;

    @media (min-width: 768px){
        font-size: 56px;
    }
`

export const H2 = styled.h2`
    font-family: 'Helvetica';
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    
    @media (min-width: 768px){
        font-size: 42px;
    }
`
export const H3 = styled.h3`
    font-family: 'Helvetica';
    font-weight: 600;
    font-size: 26px;
    line-height: 110%;
`

export const H4 = styled.h4`
    font-family: 'Helvetica';
    font-weight: 600;
    font-size: 32px;
    line-height: 120%;
    ${props => props.headline ? 'color: #5865f2; font-weight:800; line-height:95%; text-transform: uppercase' : null};
`

export const H5 = styled.h5`
    font-family: 'Helvetica';
    font-size: 16px;
    line-height: 24px;
    padding-top: ${props => props.colHeader ? '8px' : ''};
`

export const Text = styled.div`
    ${props => props.textSmall ? 'font-size: 16px; line-height: 24px;' : props.textMedium ? 'font-size: clamp(16px,2vw,20px); line-height: 1.625' : ''};
    font-family: 'Arial';
    margin-top: ${props => props.heroSubtitle ? '40px' : props.subtitle ? '24px' : ''};
    color: ${props => props.colHeader ? '#5865f2' : ''};
    font-weight: ${props => props.colHeader ? '700;' : ''};

    @media (min-width: 1024px){
        ${props => props.textMedium ? 'font-size: 20px;' : ''}
    }
`

export const Link = styled.a`
    ${props => props.navLink ? 'margin: 10px; padding:10px;' : 'display:block; margin-top: 8px;'};
    ${props => props.mobileNavLink ? 'margin: 0; padding:8px;' : 'display:block; margin-top: 4px;'};
    color: ${props => props.dark ? '#23272a' : '#fff'};
    text-decoration: none;
    cursor: pointer;
    font-size:16px;
  
    &:hover {
        text-decoration: underline;
    }
`
