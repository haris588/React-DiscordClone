import React, { useContext } from "react"
import { BackgroundImagesContainer } from '../containers/backgroundImages'
import { DesktopHeaderContainer } from '../containers/DesktopHeader'
import { MobileHeaderContainer } from '../containers/MobileHeader'
import { HeroContainer } from '../containers/hero'
import { FeatureContainer } from '../containers/feature'
import { FooterContainer } from '../containers/footer'
import { Context } from '../context'

export function Landing() {

    const { handleVisibile } = useContext(Context)

    return (
        <div onLoad={handleVisibile} style={{overflow: 'hidden'}}>
            <BackgroundImagesContainer />
            <MobileHeaderContainer />
            <DesktopHeaderContainer />
            <HeroContainer />
            <FeatureContainer />
            <FooterContainer />
        </div>
    )
}
