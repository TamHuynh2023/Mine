import PropTypes from 'prop-types'
import { Todo } from '../../@types/todo.type'
import styles from './tasklist.module.scss'
import { todoTypes } from '../../Propstypes/todo.proptype'
import connect from '../../HOC/connect'

interface TaskListProps {
    doneTaskList: boolean
    todos: Todo[]
    handleDoneTodo: (id: string, done: boolean) => void
    startEditTodo(id: string): void
    deleteTodo(id: any): void
}

function TaskList({
    doneTaskList,
    todos,
    handleDoneTodo,
    startEditTodo,
    deleteTodo
}: TaskListProps & typeof injectedProps) {
    return (
        <>
            <div className='mb-2'>
                <h2 className={styles.title}>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>
                <div className={styles.tasks}>
                    {todos.map((todo) => (
                        <div className={styles.task} key={todo.id}>
                            <input
                                type='checkbox'
                                className={styles.taskCheckbox}
                                checked={todo.done}
                                onChange={(e) => handleDoneTodo(todo.id, e.target.checked)}
                            />
                            <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>
                                {todo.name}
                            </span>
                            <div className={styles.taskActions}>
                                <button className={styles.taskBtn} onClick={() => startEditTodo(todo.id)}>
                                    🖊️
                                </button>
                                <button className={styles.taskBtn} onClick={() => deleteTodo(todo.id)}>
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

TaskList.propTypes = {
    doneTaskList: PropTypes.bool.isRequired,
    todos: PropTypes.arrayOf(todoTypes).isRequired,
    handleDoneTodo: PropTypes.func.isRequired,
    startEditTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const injectedProps = { user: { name: 'tam' } }
export default connect(injectedProps)(TaskList)
