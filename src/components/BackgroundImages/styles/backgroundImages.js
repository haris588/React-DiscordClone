import styled from "styled-components";


export const Container = styled.div`
    position:absolute;
    width:100%;
    min-height:626px;
    background: #404eed;
    overflow:hidden;

`

export const HeroBackground = styled.div`
    position: absolute;
    z-index:1;
    top: 0;
    left: 0;
    height:100%;
    width:100%;
`

export const ImageLeft = styled.img`
    display:block;
    position: absolute;
    max-width: 300px;
    left:-4em;
    z-index:5;
    bottom:0;

    @media (max-width: 320px){
        max-width: 180px;
        left:-2em;
    }

    @media (min-width: 768px) and (max-width:1024px){
        display:none;
    }

    @media (min-width: 1024px){
        position:absolute;
        bottom:0;
        display:block;
        width:auto:
        height:auto;
        max-width: none;
        left: 50%;
        margin-left:-1030px;
        transform: none;
    }
`

export const ImageRight = styled.img`
    position:absolute;
    z-index:5;
    display:none;
    @media (min-width: 768px) and (max-width:1024px){
        left:20em;
        display:block;
        bottom:0;
    }

    @media (min-width: 1024px){
        position:absolute;
        display:block;
        bottom: 0;
        left:50%;
        margin-left:370px;
    }
    
`

export const MainImage = styled.img`
    position:absolute;
    left:50%;
    display:none;
    @media (min-width: 1024px){
        position:absolute;
        display:block;
        bottom: 0;
        top:auto;
        margin-left:-1280px;
    }
`