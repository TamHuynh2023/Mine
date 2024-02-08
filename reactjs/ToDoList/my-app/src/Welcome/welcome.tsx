import React, { createContext, useCallback, useContext, useDebugValue, useId, useMemo, useState } from 'react'
import './welcome.css'

interface ThemeType {
    theme: {
        color: 'light' | 'dark'
    }
    onChangeTheme: (color: 'light' | 'dark') => void
}
const ThemeContext = createContext<ThemeType>({
    theme: {
        color: 'light'
    },
    onChangeTheme: () => {}
})

function useTheme() {
    const [theme, setTheme] = useState<ThemeType['theme']>({ color: 'light' })
    const onChangeTheme = useCallback((color: 'light' | 'dark') => {
        setTheme((prev) => ({ ...prev, color }))
    }, [])
    return { theme, onChangeTheme }
}

export default function Welcome() {
    const {theme, onChangeTheme} = useTheme()
    const [, forceRender] = useState({})

    useDebugValue(theme)

    const valueContext = useMemo(() => {
        return { theme, onChangeTheme }
    }, [theme, onChangeTheme])

    const pleaseRender = () => forceRender({})
    return (
        <>
            <div>
                <div>
                    <button onClick={pleaseRender}>Please render welcome</button>
                </div>
                <ThemeContext.Provider value={valueContext}>
                    <Form />
                    <Label />
                </ThemeContext.Provider>
            </div>
        </>
    )
}

const Label = React.memo(() => {
    const { theme, onChangeTheme } = useContext(ThemeContext)
    const id = useId()
    return (
        <>
            <label htmlFor={id}>use dark mode</label>
            <input
                type='checkbox'
                checked={theme.color === 'dark'}
                onChange={(e) => onChangeTheme(e.target.checked ? 'dark' : 'light')}
                id={id}
            />
        </>
    )
})

function Form() {
    return (
        <>
            <Panel title='welcome'>
                <Button>Sign up</Button>
                <Button>Login</Button>
            </Panel>
        </>
    )
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
    const { theme } = useContext(ThemeContext)
    const className = 'panel-' + theme.color
    return (
        <>
            <section className={className}>
                <h1>{title}</h1>
                {children}
            </section>
        </>
    )
}

function Button({ children }: { children: React.ReactNode }) {
    console.log('render button')
    const { theme } = useContext(ThemeContext)
    const className = 'button-' + theme.color
    return (
        <>
            <button className={className}>{children}</button>
        </>
    )
}
