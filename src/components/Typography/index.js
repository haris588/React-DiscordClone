import React from 'react'
import { H1, H2, H4, H5, Text, Link } from './styles/typography'

export default function Typo({ children }) {
    return (
        <>{children}</>
    )
}

Typo.H1 = function TypoH1({ children, ...restProps }) {
    return (
        <H1 {...restProps}>{children}</H1>
    )
}

Typo.H2 = function TypoH2({ children, ...restProps }) {
    return (
        <H2 {...restProps}>{children}</H2>
    )
}

Typo.H4 = function TypoH4({ children, ...restProps }) {
    return (
        <H4 {...restProps}>{children}</H4>
    )
}

Typo.H5 = function TypoH5({ children, ...restProps }) {
    return (
        <H5 {...restProps}>{children}</H5>
    )
}

Typo.Text = function TypoText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Typo.Link = function TypoLink({ children, ...restProps }) {
    return (
        <Link {...restProps}>{children}</Link>
    )
}