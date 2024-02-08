import { useCallback, useRef, useState } from 'react'
import Counter from './Counter'
import AutoInput from './Input'
import MouseTracker from './RenderProps'
import Ads from './RenderProps/Ads'
import Welcome from './Welcome'
import Watch from './components/Watch'
import ToDoList from './components/todolist'
import { PositionType } from './RenderProps/MouseTracker'

export default function App() {
    const [, render] = useState({})
    // const renderAds = useCallback((value: PositionType) => <Ads {...value} visible />, [])
    const myRef = useRef<any>((value: PositionType) => <Ads {...value} visible />)
    return (
        <>
            <div>
                <ToDoList />
                {/* <Watch /> */}
                {/* <Counter /> */}
                {/* <AutoInput /> */}
                {/* <Welcome /> */}
                {/* <div>
                    <button onClick={() => render({})}>Force rerender</button>
                </div>
                <MouseTracker render={myRef.current} /> */}

                {/* <Ads visible/> */}
            </div>
        </>
    )
}
