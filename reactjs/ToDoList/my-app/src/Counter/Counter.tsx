import React, { useReducer, useState } from 'react'
import { decreaseAgeAction, increaseAgeAction, increaseXAgeAction } from '../reducer/actions'
import reducer, { init, initialData, log } from '../reducer/reducer'

export default function Counter() {
    const [state, dispatch] = useReducer(log(), initialData, init)

    function increase() {
        dispatch(increaseAgeAction())
    }
    function decrease() {
        dispatch(decreaseAgeAction())
    }
    function increaseXAge(value: number) {
        dispatch(increaseXAgeAction(value))
    }

    return (
        <>
            <button onClick={decrease} style={{ color: 'red' }}>
                Decrease age
            </button>
            <p>Hello you are {state.age}</p>
            <button onClick={increase} style={{ color: 'green' }}>
                Increase age
            </button>

            <button onClick={() => increaseXAge(5)}>Increase X age</button>
        </>
    )
}
