import styled from 'styled-components'

export const Image = styled.img`
    width:100%;
    margin-top:auto;
    margin-bottom:auto;
    grid-column: span 4;
    object-fit:cover;
    margin-top:auto;
    margin-bottom:auto;
    max-width: 678px;
    max-height: 440px;
    ${props => props.imageBottom ? `max-width: none; max-height: none;` : ''}
    @media (min-width: 768px) and (max-width: 1024px){
        grid-column: span 4;

       ${props => props.imageRight ? `
           order:1;
       ` :
        props.imageBottom ? `
        grid-column: 1 / span 8;
        `
            : ''
    }

    }
  
   @media (min-width:1024px){
        ${props => props.imageRight ? `
            grid-column: 6 / span 7;
            order:1;
        ` : `grid-column: span 7`};
            
        ${props => props.imageBottom ? `
            grid-column: span 12;
            `
        : ''
    }
`

export const Group = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    grid-column: span 4;
    position:relative;
    margin-top:20px;

    ${props => props.groupTop ? 'text-align:center;' : ''};
    
    @media (min-width: 768px) and (max-width: 1024px){
        grid-column: ${props => props.groupLeft ? ' span 4' : props.groupTop ? 'span 8' : ''};
        margin-top:0;
    }

    @media (min-width:1024px){
        grid-column: ${props => props.groupTop ? '2 / span 10' : props.groupLeft ? '1 / span 4' : '9 / span 4'};
        margin-top:0;
    }
    
`

export const Sparkles = styled.div`
    position:absolute;
    top:-2em;
    width:100%:
    overflow:hidden;
 

   img {
        user-select: none;
   }
`

    