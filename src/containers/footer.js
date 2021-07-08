import React from 'react'
import { Grid, InfoBox, RouteSection, Typo, Buttons } from '../components/exports'

export function FooterContainer() {
    return (
        <Grid dark footer lastTile>
            <Grid.Row>
                <InfoBox>
                    <Typo.H4 headline>
                        imagine a place
                    </Typo.H4>
                    <InfoBox.Language>
                        <img style={{ height: '16px', width: '24px', marginRight: '8px' }} src="us.png" alt="" />
                        <Typo.Text textSmall>
                            English, USA
                        </Typo.Text>
                    </InfoBox.Language>
                    <InfoBox.Social>
                        <Typo.Link href="#">
                            <InfoBox.SocialIcon src="twitter.svg" alt="Twitter" />
                        </Typo.Link>
                        <Typo.Link href="#">
                            <InfoBox.SocialIcon src="insta.svg" alt="Instagram" />
                        </Typo.Link>
                        <Typo.Link href="#">
                            <InfoBox.SocialIcon src="fb.svg" alt="Facebook" />
                        </Typo.Link>
                        <Typo.Link href="#">
                            <InfoBox.SocialIcon src="yt.svg" alt="Youtube" />
                        </Typo.Link>
                    </InfoBox.Social>
                </InfoBox>
                <Grid.Spacer />
                <RouteSection>
                    <Typo.Text textSmall colHeader>
                        Product
                    </Typo.Text>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Download
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Nitro
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Status
                        </Typo.Text>
                    </Typo.Link>
                </RouteSection>
                <RouteSection>
                    <Typo.Text textSmall colHeader>
                        Company
                    </Typo.Text>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            About
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Jobs
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Branding
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Newsroom
                        </Typo.Text>
                    </Typo.Link>
                </RouteSection>
                <RouteSection>
                    <Typo.Text textSmall colHeader>
                        Resources
                    </Typo.Text>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            College
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Support
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Safety
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Blog
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Feedback
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Developers
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            StreamKit
                        </Typo.Text>
                    </Typo.Link>
                </RouteSection>
                <RouteSection>
                    <Typo.Text textSmall colHeader>
                        Policies
                    </Typo.Text>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Terms
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Privacy
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Guidelines
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Acknowledgements
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Licenses
                        </Typo.Text>
                    </Typo.Link>
                    <Typo.Link href="#">
                        <Typo.Text textSmall>
                            Moderation
                        </Typo.Text>
                    </Typo.Link>
                </RouteSection>
            </Grid.Row>

            <Grid.Row>
                <Grid.Seperator />
                <Grid.Group>
                    <Typo.Link href="#"><img src="logodark.png" alt="Discord" /></Typo.Link>
                    <Buttons buttonSmall buttonBrand href="#">
                        Sign up
                    </Buttons>
                </Grid.Group>
            </Grid.Row>
        </Grid>
    )
}