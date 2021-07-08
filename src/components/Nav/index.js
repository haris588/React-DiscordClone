import React from 'react'
import { Container, Group, Logo, Backdrop, Panel, Spacer } from './styles/nav'

export default function Nav({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Nav.Group = function NavGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Nav.Logo = function NavLogo({ ...restProps }) {
    return (
        <Logo {...restProps} />
    )
}

Nav.Backdrop = function NavBackdrop({ children, ...restProps }) {
    return (
        <Backdrop {...restProps}>{children}</Backdrop>
    )
}

Nav.Panel = function NavPanel({ children, ...restProps }) {
    return (
        <Panel {...restProps}>{children}</Panel>
    )
}

Nav.Spacer = function NavSpacer({...restProps }) {
    return (
        <Spacer {...restProps}/>
    )
}

