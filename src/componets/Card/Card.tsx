import React from "react"
import * as C from './Card.styles'

export interface CardProps {
    children: React.ReactNode
    height: 'small' | 'big';
}

export default function Card({ children, height }: CardProps) {
    return <C.Wrapper height={height}>
        {children}
    </C.Wrapper>
}