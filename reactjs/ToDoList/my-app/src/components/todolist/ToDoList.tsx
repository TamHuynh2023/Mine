import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todolist.module.scss'
import { useEffect, useState } from 'react'
import { Todo } from '../../@types/todo.type'
import { debug, log } from '../../Propstypes/constants'

interface HandlerNewTodo {
    (todos: Todo[]): Todo[]
}

function syncReactToLocal(parameter: HandlerNewTodo) {
    const todosString = localStorage.getItem('todo')
    const newObj: Todo[] = JSON.parse(todosString || '[]')
    const newTodoObj = parameter(newObj)
    localStorage.setItem('todo', JSON.stringify(newTodoObj))
}

export default function ToDoList() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
    useEffect(() => {
        const todosString = localStorage.getItem('todo')
        const newObj: Todo[] = JSON.parse(todosString || '[]')
        setTodos(newObj)
    }, [])

    function startEditTodo(id: string) {
        let change = todos.find((item) => item.id === id)
        setCurrentTodo(change || null)
    }

    function doingEditTodo(name: string) {
        if (currentTodo) {
            setCurrentTodo({ ...currentTodo, name })
        } else {
            return null
        }
    }
    // Kiểm tra todo đã được xóa hay chưa, kiểm tra id
    function finishEditTodo() {
        function handler(parameter: Todo[]) {
            if (currentTodo) {
                return parameter.map((item) => (item.id === currentTodo.id ? currentTodo : item))
            } else {
                return parameter
            }
        }
        setTodos(handler)
        setCurrentTodo(null)
        syncReactToLocal(handler)
    }

    // Xóa todo khỏi danh sách
    function deleteTodo(id: string) {
        if (currentTodo) {
            setCurrentTodo(null)
        }
        function handler(paremter: Todo[]) {
            return paremter.filter((item) => item.id !== id)
        }
        setTodos(handler)
        syncReactToLocal(handler)
    }

    const doneTodos = todos.filter((todo) => todo.done)
    const notDoneTodos = todos.filter((todo) => !todo.done)

    // Thêm một todo mới vào danh sách
    function addTodo(name: string) {
        const todo: Todo = {
            name,
            done: false,
            id: new Date().toISOString()
        }
        function handler(parameter: Todo[]) {
            const existName = parameter.some((item) => item.name === name)
            if (existName) {
                return parameter
            } else {
                return [...parameter, todo]
            }
        }

        setTodos(handler)

        syncReactToLocal(handler)
    }

    function handleDoneTodo(id: string, done: boolean) {
        let change = todos.map((item) => {
            if (item.id === id) {
                return { ...item, done }
            } else {
                return item
            }
        })
        setTodos(change)
    }
    return (
        <>
            <div className={styles.todolist}>
                <div className={styles.todolistContainer}>
                    <TaskInput
                        addTodo={addTodo}
                        currentTodo={currentTodo}
                        doingEditTodo={doingEditTodo}
                        finishEditTodo={finishEditTodo}
                    />
                    <TaskList
                        doneTaskList={false}
                        todos={notDoneTodos}
                        handleDoneTodo={handleDoneTodo}
                        startEditTodo={startEditTodo}
                        deleteTodo={deleteTodo}
                    />
                    <TaskList
                        doneTaskList={true}
                        todos={doneTodos}
                        handleDoneTodo={handleDoneTodo}
                        startEditTodo={startEditTodo}
                        deleteTodo={deleteTodo}
                    />
                </div>
            </div>
        </>
    )
}
