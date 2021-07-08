import React from 'react'
import { Image, Group, Sparkles } from './styles/feature'

export default function Feature({ children, ...restProps }) {
    return (
        <div {...restProps}>{children}</div>
    )
}

Feature.Image = function FeatureImage({ ...restProps }) {
    return <Image {...restProps} />
}

Feature.Group = function FeatureGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Feature.Sparkles = function FeatureSparkles({ children, ...restProps }) {
    return (
        <Sparkles {...restProps}>{children}</Sparkles>
    )
}