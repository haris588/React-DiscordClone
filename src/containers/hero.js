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
                            {window.innerHeight > window.innerWidth ? 'Download from Google Play' : 'Download for Windows'}
                        </Buttons>

                        {window.innerHeight > window.innerWidth ? null : <Buttons href="#"  openButton buttonLarge buttonDark>
                            Open Discord in your browser
                        </Buttons>}
                    </Hero.HeroButtons>

                </Hero>
            </Grid.Row>
        </Grid >

    )
}
