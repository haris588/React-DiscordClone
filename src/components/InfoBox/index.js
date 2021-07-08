import React from 'react'
import { Info, Language, Social, SocialIcon } from './styles/infoBox'

export default function InfoBox({children, ...restProps}){
    return (
        <Info {...restProps}>{ children }</Info>
    )
}

InfoBox.Language = function InfoBoxLanguage({children, ...restProps}){
    return (
        <Language {...restProps}>{children}</Language>
    )
}

InfoBox.Social = function InfoBoxSocial({children, ...restProps}){
    return (
        <Social {...restProps}>{children}</Social>
    )
}

InfoBox.SocialIcon = function InfoBoxSocialIcon({...restProps}) {
    return (
        <SocialIcon {...restProps}/>
    )
}