import React from 'react'
import { Container } from './styles/routeSection'


export default function RouteSection({children, ...restProps}){
    return (
        <Container {...restProps}>{children}</Container>
    )
}

