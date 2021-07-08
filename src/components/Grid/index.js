import React from 'react'
import { Container, Row, Group, Spacer, Seperator } from './styles/grid'

export default function Grid({children, ...restProps}){
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Grid.Row = function GridRow({children, ...restProps}){
    return (
        <Row {...restProps}>{children}</Row>
    )
}

Grid.Spacer = function GridSpacer({...restProps}){
    return (
        <Spacer {...restProps}/>
    )
}

Grid.Group = function GridGroup({children, ...restProps}){
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Grid.Seperator = function GriSeperator({...restProps}){
    return (
        <Seperator {...restProps}/>
    )
}
