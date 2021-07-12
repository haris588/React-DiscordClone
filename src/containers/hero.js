import React from 'react'
import { Grid, Hero, Typo, Buttons } from '../components/exports'

export function HeroContainer() {
    return (
        <Grid>
            <Grid.Row header>
                <Hero>
                    <Typo.H1>
                        imagine a place...
                    </Typo.H1>
                    <Typo.Text heroSubtitle textMedium>
                        ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                    </Typo.Text>
                    <Hero.HeroButtons>
                        <Buttons href="#" twoButtons downloadButton buttonLarge buttonWhite >
                            {window.innerWidth < 1024 ? <Typo.Text textSmall>Download from Google Play</Typo.Text> : <Typo.Text textSmall>Download for Windows</Typo.Text>}
                        </Buttons>
                        {window.innerWidth < 1024 ? null : <Buttons href="#" openButton buttonLarge buttonDark> <Typo.Text textSmall>Open Discord in your browser</Typo.Text> </Buttons>}
                    </Hero.HeroButtons>
                </Hero>
            </Grid.Row>
        </Grid >

    )
}
