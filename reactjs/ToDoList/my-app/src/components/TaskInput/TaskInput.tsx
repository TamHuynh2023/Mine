import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { todoTypes } from '../../Propstypes/todo.proptype'

import styles from './taskinput.module.scss'
import { Todo } from '../../@types/todo.type'
import { debug, log } from '../../Propstypes/constants'
import Title from '../title'
import connect from '../../HOC/connect'

interface TaskInputProps {
    addTodo: (name: string) => void
    currentTodo: Todo | null
    doingEditTodo(name: string): void
    finishEditTodo(): void
}
function TaskInput({ addTodo, currentTodo, doingEditTodo, finishEditTodo }: TaskInputProps & typeof injectedProps) {
    const [name, setName] = useState<string>('')

    const address = useMemo(() => {
        return {
            street: '05 Ung Van Khiem'
        }
    }, [])

    const handleClickTitle = useCallback((value: any) => {
        console.log(value)
    }, [])

    function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
        if (currentTodo) {
            doingEditTodo(event.target.value)
        } else {
            setName(event.target.value)
        }
    }
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (currentTodo) {
            finishEditTodo()
        } else if (name.trim() !== '') {
            addTodo(name)
        }
        setName('')
    }

    function handleEnter(event: React.KeyboardEvent<HTMLFormElement>) {
        if (event.key === 'Enter') {
            handleSubmit(event as React.FormEvent<HTMLFormElement>)
        }
    }
    return (
        <>
            <div className='mb-2'>
                <Title address={address} handleClickTitle={handleClickTitle} />
                <form className={styles.form} onSubmit={handleSubmit} tabIndex={0} onKeyDown={handleEnter}>
                    <input
                        type='text'
                        placeholder='caption goes here'
                        value={currentTodo ? currentTodo.name : name}
                        onChange={handleChangeInput}
                    />
                    <button type='submit'>➕</button>
                </form>
            </div>
        </>
    )
}

TaskInput.propTypes = {
    addTodo: PropTypes.func.isRequired,
    doingEditTodo: PropTypes.func.isRequired,
    finishEditTodo: PropTypes.func.isRequired,
    currentTodo: PropTypes.oneOfType([todoTypes, PropTypes.oneOf([null])])
}

const injectedProps = { debug: debug, log: log }
export default connect(injectedProps)(TaskInput)
