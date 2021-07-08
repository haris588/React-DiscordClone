import React from 'react'
import { BackgroundImages } from '../components/exports'

export function BackgroundImagesContainer() {
    return (
        <BackgroundImages>
            <BackgroundImages.HeroBackground>
                 <BackgroundImages.MainImage src="1.svg" alt="" />
                <BackgroundImages.ImageLeft src="left.svg" alt="" />
                 <BackgroundImages.ImageRight src="right.svg" alt="" />
            </BackgroundImages.HeroBackground>
        </BackgroundImages>
    )
}

