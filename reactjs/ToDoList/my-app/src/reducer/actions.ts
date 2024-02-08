export type ActionType = IncreaseAgeAction | DecreaseAgeAction | IncreaseXAgeAction

type IncreaseAgeAction = { type: 'increaseAge' }
type DecreaseAgeAction = { type: 'decreaseAge' }
type IncreaseXAgeAction = { type: 'increaseXAge'; payload: number }

export function increaseAgeAction() {
    return { type: 'increaseAge' } as IncreaseAgeAction
}
export function decreaseAgeAction() {
    return { type: 'decreaseAge' } as DecreaseAgeAction
}
export function increaseXAgeAction(payload: number) {
    return { type: 'increaseXAge', payload } as IncreaseXAgeAction
}
