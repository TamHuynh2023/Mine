import { ActionType } from './actions'

export const initialData = {
    age: 23
}

export const init = (initialValue: typeof initialData) => {
    return { ...initialValue, age: initialValue.age + 4 }
}

export default function reducer(state: typeof initialData, action: ActionType) {
    if (action.type === 'increaseAge') {
        return { ...state, age: state.age + 1 }
    } else if (action.type === 'decreaseAge') {
        return { ...state, age: state.age - 1 }
    } else if (action.type === 'increaseXAge') {
        return { ...state, age: state.age + 5 }
    }
    throw Error('unknown error')
}

export const log = () => {
    return (state: typeof initialData, action: ActionType) => {
        const nextState = reducer(state, action)
        console.log(nextState)
        return nextState
    }
}
