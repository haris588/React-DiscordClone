import React from 'react'
import { Grid, Nav, Typo, Buttons } from '../components/exports'

export function DesktopHeaderContainer() {
    return (
        <Grid desktop>
            <Grid.Row header>
                <Nav desktop>
                    <Nav.Group>
                        <Typo.Link href="#" >
                            <Nav.Logo src="logo.png" alt="Discord" />
                        </Typo.Link>
                    </Nav.Group>
                    <Nav.Group>
                        <Typo.Link href="#" navLink>
                            <Typo.Text textSmall>
                                Download
                            </Typo.Text>
                        </Typo.Link>
                        <Typo.Link href="#" navLink>
                            <Typo.Text textSmall>
                                Nitro
                            </Typo.Text>
                        </Typo.Link>
                        <Typo.Link href="#" navLink>
                            <Typo.Text textSmall>
                                Safety
                            </Typo.Text>
                        </Typo.Link>
                        <Typo.Link href="#" navLink>
                            <Typo.Text textSmall>
                                Support
                            </Typo.Text>
                        </Typo.Link>
                    </Nav.Group>
                    <Nav.Group>
                        <Buttons buttonSmall buttonWhite href="#">
                            Login
                        </Buttons>
                    </Nav.Group>

                </Nav>
            </Grid.Row>
        </Grid>

    )
}