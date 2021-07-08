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
        <Grid>
            <Grid.Row >
                <Nav>
                    <Nav.Group>
                        <Typo.Link>
                            <Nav.Logo src="logo.png" alt="Discord" href="#" />
                        </Typo.Link>
                    </Nav.Group>

                    <Nav.Group>
                        <Buttons navButton href="#" onClick={handleVisibility}>
                            <img src="hamburger.svg" alt=""  />
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
                                <Typo.Link>
                                    <Nav.Logo src="mobilelogo.png" alt="" />
                                </Typo.Link>
                            </Nav.Group>
                            <Buttons closeButton onClick={handleVisibility}>
                                <img src="close.svg" alt="" />
                            </Buttons>
                        </Nav>

                        <Nav.Spacer />

                        <Typo.Link href="#" navLink dark>
                            <Typo.Text>
                                Home
                            </Typo.Text>
                        </Typo.Link>
                        <Typo.Link href="#" navLink dark>
                            <Typo.Text>
                                Download
                            </Typo.Text>
                        </Typo.Link>
                        <Typo.Link href="#" navLink dark>
                            <Typo.Text>
                                Nitro
                            </Typo.Text>
                        </Typo.Link>
                        <Typo.Link href="#" navLink dark>
                            <Typo.Text>
                                Safety
                            </Typo.Text>
                        </Typo.Link>
                        <Typo.Link href="#" navLink dark>
                            <Typo.Text>
                                Mod Academy
                            </Typo.Text>
                        </Typo.Link>
                        <Typo.Link href="#" navLink dark>
                            <Typo.Text>
                                Support
                            </Typo.Text>
                        </Typo.Link>
                    </Nav.Panel>
                </Nav>
            </Grid.Row>
        </Grid>
    )
}