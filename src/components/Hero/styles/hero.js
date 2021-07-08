import styled from 'styled-components'

export const Group = styled.div`
    padding: 60px 0;
    grid-column: span 4;
    color:#fff;
    z-index: 2;
    padding: 80px 0;

    @media (min-width: 768px) and (max-width: 1024px){
        grid-column: span 5;
        text-align:left;
        padding: 80px 0;
    }

    @media (min-width: 1023px){
        grid-column: 2 / span 10;
        text-align:center;
        padding: 120px 0;
    }

    @media (min-width: 1440px){
        grid-column: 3 / span 8;
        text-align:center;
        padding: 120px 0;
    }

  
`

export const HeroButtons = styled.div`
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content:center;
    @media (max-width: 1023px){
        justify-content:flex-start;
    }
`
