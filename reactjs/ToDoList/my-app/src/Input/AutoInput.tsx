import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

interface TypeRefrop {
    type: () => void
}
const Input = forwardRef<TypeRefrop>((props, ref) => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    function type() {
        let numberIndex = 0
        const initialString = 'huynh minh tam'
        inputRef.current?.focus()
        let interval: any = setInterval(() => {
            setValue(initialString.slice(0, numberIndex))
            if (numberIndex === initialString.length) {
                return clearInterval(interval)
            }
            numberIndex++
        }, 100)
    }

    useImperativeHandle(ref, () => {
        return { type }
    })

    return (
        <>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)} ref={inputRef} />
        </>
    )
})

export default function AutoInput() {
    const funcInputRef = useRef<{ type: () => void }>({ type: () => {} })
    function handleClick() {
        funcInputRef.current.type()
    }
    return (
        <>
            <div>
                <button onClick={handleClick}>Click to type</button>
            </div>
            <Input ref={funcInputRef} />
        </>
    )
}
