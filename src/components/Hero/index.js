import React from 'react'
import { Group, HeroButtons } from './styles/hero'

export default function Hero({ children, ...restProps }) {
    return (
        <Group {...restProps}> {children} </Group>
    )
}

Hero.HeroButtons = function HeroHeroButtons({ children, ...restProps }) {
    return (
        <HeroButtons {...restProps}>{children}</HeroButtons>
    )
}


