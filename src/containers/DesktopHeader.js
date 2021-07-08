import React from 'react'
import { Grid, Nav, Typo, Buttons } from '../components/exports'

export function DesktopHeaderContainer() {
    return (
        <Grid>
            <Grid.Row header>
                <Nav>
                    <Nav.Group>
                        <Typo.Link href="#" >
                            <Nav.Logo src="logo.png" alt="Discord" />
                        </Typo.Link>
                    </Nav.Group>
                    <Nav.Group>
                        <Typo.Link href="#" navLink>
                            Download
                        </Typo.Link>
                        <Typo.Link href="#" navLink>
                            Nitro
                        </Typo.Link>
                        <Typo.Link href="#" navLink>
                            Safety
                        </Typo.Link>
                        <Typo.Link href="#" navLink>
                            Support
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