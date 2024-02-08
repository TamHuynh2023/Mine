import React, { useEffect, useRef, useState } from 'react'

function WatchTimer() {
    const [seconds, setSeconds] = useState<number>(0)
    const interValidRef = useRef<any>(null)
    useEffect(() => {
        console.log('chay 1 lan')
        interValidRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1)
            console.log('Set Interval dang chay')
        }, 1000)

        return () => {
            clearInterval(interValidRef.current)
            console.log('Watch Timeout unmounted')
        }
    }, [interValidRef])

    return <div>Watch {seconds}</div>
}

export default function Watch() {
    const [visible, setVisible] = useState<boolean>(true)

    return (
        <>
            <button onClick={() => setVisible(!visible)}>Click set Interval</button>
            {visible && <WatchTimer />}
        </>
    )
}
