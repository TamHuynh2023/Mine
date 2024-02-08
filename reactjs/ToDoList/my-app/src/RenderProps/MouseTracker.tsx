import React, { useState } from 'react'
import Ads from './Ads'

export interface PositionType {
    x: number
    y: number
}

function MouseTracker({ render }: { render: (value: PositionType) => JSX.Element }) {
    const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 })
    function handleMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setPosition({
            x: event.clientX,
            y: event.clientY
        })
    }
    return (
        <>
            <div onMouseMove={handleMove}>
                <p style={{ color: 'red' }}>Mouse Tracker</p>
                {render(position)}
            </div>
        </>
    )
}

export default React.memo(MouseTracker)

export function withMouseTracker<T>(Component: React.ComponentType<T & PositionType>) {
    return function WithMouseTracker(props: Omit<T, keyof PositionType>) {
        const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 })
        function handleMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
            setPosition({
                x: event.clientX,
                y: event.clientY
            })
        }
        return (
            <div onMouseMove={handleMove}>
                <p style={{ color: 'red' }}>Mouse Tracker</p>
                <Component {...(props as T)} {...position} />
            </div>
        )
    }
}
