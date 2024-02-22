import { Middleware, MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { isEntityError } from 'utils/helper'

function isPayloadErrorMessage(payload: unknown): payload is {
    data: {
        error: string
    }
    status: number
} {
    return (
        typeof payload === 'object' &&
        payload !== null &&
        'data' in payload &&
        typeof (payload as any).data.error === 'string'
    )
}

export const rtkQuerryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        if (isPayloadErrorMessage(action.payload)) {
            toast.warn(action.payload.data.error)
        } else if (!isEntityError(action.payload)) {
            toast.warn(action.error.message)
        }
    }
    return next(action)
}
