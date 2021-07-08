import styled from "styled-components"

export const Button = styled.a`
    line-height: 24px;
    cursor: pointer;
    font-weight: 500;
    display:inline-flex;
    align-items:center;
    text-decoration:none;
    transition: background .4s ease, box-shadow .4s ease;

    &:hover {
        background: ${props => props.dark ? '#2c2f33' : null};
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    };

    ${props => props.downloadButton ? `
        margin-top: 32px;
    ` : props.openButton ? `
        margin-top: 32px;
    ` : ''};

    ${props => props.twoButtons ? `
        margin-right: 24px;
        `:''};

    ${props => props.buttonSmall ? `
        border-radius: 40px;
        font-size:14px;
        padding: 7px 16px;
    ` : props.buttonLarge ? `
        border-radius: 28px;
        font-size: 20px;
        padding: 16px 32px;
    `: ''};

    ${props => props.closeButton ? `
        position: absolute;
        top:24px;
        right:24px;
        margin:-8px;
        padding: 8px;
        z-index:10000;
        line-height: 0;
    
    ` : props.navButton ? `
        position: relative;
        top:2px;
        right:4px;
        margin:-16px;
        padding: 8px;
        z-index:9999;
        line-height: 0;
    ` : ''};

    ${props => props.buttonWhite ? `
        background: #fff;
        color: #23272a;
        ` : 
        props.buttonDark ? `
        background: #23272a;
        color: #fff;
        ` : 
    
        props.buttonBrand ? `
        background: #5865f2;
        color: #fff;
        ` : ''};
`