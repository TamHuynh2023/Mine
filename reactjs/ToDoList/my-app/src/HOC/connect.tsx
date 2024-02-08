import React from 'react'
import { debug, log } from '../Propstypes/constants'

export interface ExtraInfoType {
    debug: boolean
    log(value: any): void
}

export interface InjectType {
    user: any
}

export default function connect<P>(injectedProps: P) {
    return function connect<T>(WrapComponent: React.ComponentType<T & P>) {
        return function Connect(props: Omit<T, keyof P>) {
            return <WrapComponent {...(props as T & {})} {...injectedProps} />
        }
    }
}



