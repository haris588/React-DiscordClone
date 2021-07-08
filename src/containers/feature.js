import React, { useContext } from 'react'
import { Feature, Grid, Typo, Buttons } from '../components/exports'
import { Context } from '../context'

export function FeatureContainer() {

    const { visible1, visible2, visible3, visible4 } = useContext(Context)

    return (
        <>
            <Grid firstTile>
                <Grid.Row container isVisible={visible1} isInvis={!visible1}>
                    <Feature.Image src="4.svg" alt="" />
                    <Feature.Group>
                        <Typo.H2>
                            Create an invite-only place where you belong
                        </Typo.H2>
                        <Typo.Text subtitle textMedium>
                            Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                        </Typo.Text>
                    </Feature.Group>
                </Grid.Row>

            </Grid>

            <Grid grey>
                <Grid.Row container isVisible={visible2} isInvis={!visible2}>
                    <Feature.Image src="5.svg" alt="" imageRight />
                    <Feature.Group groupLeft>
                        <Typo.H2>
                            Where hanging out is easy
                        </Typo.H2>
                        <Typo.Text subtitle textMedium>
                            Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
                        </Typo.Text>
                    </Feature.Group>
                </Grid.Row>
            </Grid>

            <Grid>
                <Grid.Row container isVisible={visible3} isInvis={!visible3}>
                    <Feature.Image src="6.svg" alt="" />
                    <Feature.Group>
                        <Typo.H2>
                            From few to a fandom
                        </Typo.H2>
                        <Typo.Text subtitle textMedium>
                            Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.                        </Typo.Text>
                    </Feature.Group>
                </Grid.Row>
            </Grid>

            <Grid grey>
                <Grid.Row container isVisible={visible4} isInvis={!visible4}>

                    <Feature.Group groupTop>
                        <Typo.H2>
                            RELIABLE TECH FOR STAYING CLOSE
                        </Typo.H2>
                        <Typo.Text subtitle textMedium>
                            Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
                        </Typo.Text>
                    </Feature.Group>
                    <Feature.Image src="7.svg" alt="" imageBottom />
                </Grid.Row>
            </Grid>

            <Grid grey lastTile>
                <Grid.Row>
                    <Feature.Group groupTop>
                        <Feature.Sparkles>
                            <img src="sparkles.svg" alt="" />
                        </Feature.Sparkles>
                        <Typo.H3>
                            Ready to start your journey?
                        </Typo.H3>
                        <Buttons buttonLarge buttonBrand downloadButton href="#">
                            {window.innerHeight > window.innerWidth ? 'Download from Google Play' : 'Download for Windows'}
                        </Buttons>
                    </Feature.Group>
                </Grid.Row>
            </Grid>
        </>
    )
}