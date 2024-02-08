import React, { useRef, forwardRef } from 'react'

const App = () => {
    const myInputRef = useRef<HTMLInputElement>(null)

    const handleButtonClick = () => {
        if (myInputRef.current) {
            myInputRef.current.focus()
        }
    }

    return (
        <div>
            <MyInput ref={myInputRef} />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    )
}

export default App

function Test(props, ref: React.ForwardedRef<HTMLInputElement>) {
    return <input type='text' ref={ref} />
}

const MyInput = forwardRef(Test)
