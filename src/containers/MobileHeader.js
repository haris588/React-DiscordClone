import React, { useState } from 'react'
import { Grid, Nav, Typo, Buttons } from '../components/exports'

export function MobileHeaderContainer() {

    const [visible, setVisible] = useState(false)

    const handleVisibility = () => {
        setVisible(!visible)

        if (!visible) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }

    }

    return (
        <Grid mobile>
            <Grid.Row >
                <Nav>
                    <Nav.Group>
                        <Typo.Link href="#" >
                            <Nav.Logo src="logo.png" alt="Discord" />
                        </Typo.Link>
                    </Nav.Group>

                    <Nav.Group>
                        <Buttons navButton href="#" onClick={handleVisibility}>
                            <img src="hamburger.svg" alt="menu" />
                        </Buttons>
                    </Nav.Group>

                    {visible ?
                        <>
                            <Nav.Backdrop ></Nav.Backdrop>

                        </> : null
                    }

                    <Nav.Panel isVisible={visible} >
                        <Nav>
                            <Nav.Group>
                                <Typo.Link href="#" >
                                    <Nav.Logo src="mobilelogo.png" alt="Discord" />
                                </Typo.Link>
                            </Nav.Group>
                            <Buttons closeButton onClick={handleVisibility} href="#" >
                                <img src="close.svg" alt="close menu" />
                            </Buttons>
                        </Nav>

                        <Nav.Spacer />

                        <Nav.Group mobileNavGroup>
                            <Typo.Link href="#" mobileNavLink dark>
                                <Typo.Text textSmall>
                                    Home
                                </Typo.Text>
                            </Typo.Link>
                            <Typo.Link href="#" mobileNavLink dark>
                                <Typo.Text textSmall>
                                    Download
                                </Typo.Text>
                            </Typo.Link>
                            <Typo.Link href="#" mobileNavLink dark>
                                <Typo.Text textSmall>
                                    Nitro
                                </Typo.Text>
                            </Typo.Link>
                            <Typo.Link href="#" mobileNavLink dark>
                                <Typo.Text textSmall>
                                    Safety
                                </Typo.Text>
                            </Typo.Link>
                            <Typo.Link href="#" mobileNavLink dark>
                                <Typo.Text textSmall>
                                    Mod Academy
                                </Typo.Text>
                            </Typo.Link>
                            <Typo.Link href="#" mobileNavLink dark>
                                <Typo.Text textSmall>
                                    Support
                                </Typo.Text>
                            </Typo.Link>
                        </Nav.Group>
                        <Nav.Footer>
                            <Nav.ButtonWrapper>
                                <Buttons href="#" downloadButton buttonSmall buttonBrand >
                                    <Typo.Text> Download from Google Play </Typo.Text>
                                </Buttons>
                            </Nav.ButtonWrapper>
                        </Nav.Footer>

                    </Nav.Panel>
                </Nav>
            </Grid.Row>

        </Grid>

    )
}