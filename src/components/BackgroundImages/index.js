import React from 'react'
import { Container, HeroBackground, ImageLeft, ImageRight, MainImage } from './styles/backgroundImages'

export default function BackgroundImages({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

BackgroundImages.HeroBackground = function BackgroundImagesHeroBackground({ children, ...restProps }) {
    return (
        <HeroBackground {...restProps}>{ children }</HeroBackground >
    )
}


BackgroundImages.MainImage = function BackgroundImagesMainImage({ ...restProps }) {
    return <MainImage {...restProps} />
}
BackgroundImages.ImageLeft = function BackgroundImagesImageLeft({ ...restProps }) {
    return <ImageLeft {...restProps} />
}

BackgroundImages.ImageRight = function BackgroundImagesImageRight({ ...restProps }) {
    return <ImageRight {...restProps} />
}