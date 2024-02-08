// import './style.css'
import React, { useEffect, useReducer, useState } from 'react'
type ActionType = Add | Change | Delete | StartEditTodo | DoingEditTodo | CompletelyEdit | MoveUp | MoveDown | Load

type Add = { type: 'add'; payload: { name: string } }
type Change = { type: 'change'; payload: { id: string } }
type Delete = { type: 'delete'; payload: { id: string } }
type StartEditTodo = { type: 'start edit todo'; payload: { id: string } }
type DoingEditTodo = { type: 'doing edit todo'; payload: { name: string } }
type CompletelyEdit = { type: 'completely todo'; payload: null | Todo[] }
type MoveUp = { type: 'move up'; payload: { id: string } }
type MoveDown = { type: 'move down'; payload: { id: string } }
type Load = { type: 'load'; payload: Todo[] }

interface Todo {
  name: string
  id: string
  done: boolean
}

interface localStoReact {
  (todos: Todo[]): Todo[]
}

interface State {
  todos: Todo[]
  currentTodo: Todo | null
}

// interface Action {
//   type: string
//   payload: any
// }

const initialData: State = {
  todos: [],
  currentTodo: null
}

function reducer(state: State, action: ActionType): State {
  switch (action.type) {
    case 'add':
      const { name } = action.payload
      let change = { id: new Date().toISOString(), name, done: false }
      function handlerArray(parameter: Todo[]) {
        const existName = parameter.some((item) => item.name === name)
        if (existName) {
          return parameter
        } else {
          return [...parameter, change]
        }
      }
      const updatedTodosAdd = handlerArray(state.todos)
      saveWrapLocalReact(handlerArray)
      return {
        ...state,
        todos: updatedTodosAdd
      }

    case 'change':
      const { id: changeId } = action.payload
      const updatedTodos = state.todos.map((item) => (item.id === changeId ? { ...item, done: !item.done } : item))

      return {
        ...state,
        todos: updatedTodos
      }

    case 'delete':
      const { id: deleteId } = action.payload

      function handler(parameter: Todo[]) {
        return parameter.filter((item) => item.id !== deleteId)
      }

      saveWrapLocalReact(handler)
      return {
        ...state,
        todos: handler(state.todos),
        currentTodo: null
      }

    case 'start edit todo':
      const { id: startTodoId } = action.payload
      let startEditTodoList = state.todos.find((item) => item.id === startTodoId)

      return {
        ...state,
        currentTodo: startEditTodoList || null
      }
    case 'doing edit todo':
      const { name: nameDoingEdit } = action.payload
      if (state.currentTodo) {
        return {
          ...state,
          currentTodo: { ...state.currentTodo, name: nameDoingEdit }
        }
      }
      return state
    case 'completely todo':
      function handlerArrayForCompletely(parameter: Todo[]) {
        if (state.currentTodo) {
          return parameter.map((item) => (item.id === state.currentTodo?.id ? state.currentTodo : item))
        } else {
          return parameter
        }
      }
      saveWrapLocalReact(handlerArrayForCompletely)
      return {
        ...state,
        todos: handlerArrayForCompletely(state.todos) as Todo[],
        currentTodo: null
      }

    case 'move up':
      const { id: moveUpId } = action.payload
      function handlerUp(parameter: Todo[]) {
        const indexMove = parameter.findIndex((item) => item.id === moveUpId)
        const updateTodoMoveUp = [...parameter]
        if (indexMove > 0) {
          ;[updateTodoMoveUp[indexMove], updateTodoMoveUp[indexMove - 1]] = [
            updateTodoMoveUp[indexMove - 1],
            updateTodoMoveUp[indexMove]
          ]
        }
        return updateTodoMoveUp
      }
      const updatedMoveUp = handlerUp(state.todos)
      saveWrapLocalReact(() => updatedMoveUp)

      return { ...state, todos: updatedMoveUp }

    case 'move down':
      const { id: moveDownId } = action.payload
      function handleDown(parameter: Todo[]) {
        const indexDown = parameter.findIndex((item) => item.id === moveDownId)
        const updateTodoMoveDown = [...parameter]
        if (indexDown < updateTodoMoveDown.length - 1) {
          ;[updateTodoMoveDown[indexDown], updateTodoMoveDown[indexDown + 1]] = [
            updateTodoMoveDown[indexDown + 1],
            updateTodoMoveDown[indexDown]
          ]
        }
        return updateTodoMoveDown
      }
      const updatedMoveDown = handleDown(state.todos)
      saveWrapLocalReact(() => updatedMoveDown)

      return {
        ...state,
        todos: updatedMoveDown
      }
    case 'load':
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state
  }
}

function saveWrapLocalReact(localStoReact: localStoReact) {
  const todoString = localStorage.getItem('todos')
  const obj: Todo[] = JSON.parse(todoString || '[]')
  const newObj = localStoReact(obj)
  localStorage.setItem('todos', JSON.stringify(newObj))
}
export default function TodoList() {
  // const [todos, setTodos] = useState<Todo[]>([])
  // const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)

  const [state, dispatch] = useReducer(reducer, initialData)

  const notFinish = state.todos.filter((item) => !item.done)
  const finish = state.todos.filter((item) => item.done)

  useEffect(() => {
    const todoString = localStorage.getItem('todos')
    const obj: Todo[] = JSON.parse(todoString || '[]')
    dispatch({ type: 'load', payload: obj })
  }, [])

  function handleAddNewTodo(name: string) {
    dispatch({ type: 'add', payload: { name } })
  }

  function handleCheckInputChecked(id: string, done: boolean) {
    dispatch({ type: 'change', payload: { id } })
  }

  function startEditTodo(id: string) {
    dispatch({ type: 'start edit todo', payload: { id } })
  }

  function doingEditTodo(name: string) {
    dispatch({ type: 'doing edit todo', payload: { name } })
  }

  function completelyEditTodo() {
    dispatch({ type: 'completely todo', payload: null })
  }

  function deleteTodo(id: string) {
    dispatch({ type: 'delete', payload: { id } })
  }
  function moveUp(id: string) {
    dispatch({ type: 'move up', payload: { id } })
  }

  function moveDown(id: string) {
    dispatch({ type: 'move down', payload: { id } })
  }
  return (
    <>
      <div className='container'>
        <h1>Project to do list using typescript</h1>
        <TaskInput
          handleAddNewTodo={handleAddNewTodo}
          currentTodo={state.currentTodo}
          doingEditTodo={doingEditTodo}
          completelyEditTodo={completelyEditTodo}
        />
        <TaskList
          title={'Chưa hoàn thành'}
          todos={notFinish}
          handleCheckInputChecked={handleCheckInputChecked}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
          moveUp={moveUp}
          moveDown={moveDown}
        />
        <TaskList
          title={'Hoàn thành'}
          todos={finish}
          handleCheckInputChecked={handleCheckInputChecked}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
          moveUp={moveUp}
          moveDown={moveDown}
        />
      </div>
    </>
  )
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface TaskInputProp {
  handleAddNewTodo(name: string): void
  currentTodo: Todo | null
  doingEditTodo(name: string): void
  completelyEditTodo(): void
}
function TaskInput({ handleAddNewTodo, currentTodo, doingEditTodo, completelyEditTodo }: TaskInputProp) {
  const [name, setName] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (currentTodo) {
      completelyEditTodo()
    } else {
      handleAddNewTodo(name)
    }
    setName('')
  }

  function handleChangeInputText(event: React.ChangeEvent<HTMLInputElement>) {
    if (currentTodo) {
      doingEditTodo(event.target.value)
    } else {
      setName(event.target.value)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add new to do implement.......'
          value={currentTodo ? currentTodo.name : name}
          onChange={handleChangeInputText}
        />
        <button type='submit'>➕</button>
      </form>
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface TaskListProp {
  title: string
  todos: Todo[]
  handleCheckInputChecked(id: string, done: boolean): void
  startEditTodo(id: string): void
  deleteTodo(id: string): void
  moveUp(id: string): void
  moveDown(id: string): void
}
function TaskList({
  title,
  todos,
  handleCheckInputChecked,
  startEditTodo,
  deleteTodo,
  moveUp,
  moveDown
}: TaskListProp) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <input
              type='checkbox'
              checked={item.done}
              onChange={(event) => handleCheckInputChecked(item.id, event.target.checked)}
            />
            <span className={item.done ? 'finish' : ''}>{item.name}</span>
            <div className='btn'>
              <button onClick={() => startEditTodo(item.id)}>🖊️</button>
              <button onClick={() => deleteTodo(item.id)}>🗑️</button>
              <button onClick={() => moveUp(item.id)}>⬆️</button>
              <button onClick={() => moveDown(item.id)}>⬇️</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
