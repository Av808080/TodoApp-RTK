import { FC, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, editTodo } from '../features/Todo/TodoSlice.ts'
import { Todo } from '../Types/Todo.ts'

interface TodoProps {
    todo: Todo
}

const TodoItem: FC<TodoProps> = ({ todo }) => {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [input, setInput] = useState(todo.title)
    return (
        <div className='flex gap-6 w-4/6 bg-teal-200 mx-auto'>
            <div className='w-4/6 px-6 py-1'>
                {isEditing ?
                    <input value={input}
                    className='ring-1 ring-teal-500 focus:outline-none focus:ring-2 rounded-lg px-3 py-0.5'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} />
                    : <>{todo.title} </>}
            </div>
            {isEditing ? <>
                <button onClick={() => setIsEditing(false)}>cancle</button>
                <button onClick={() => {
                    dispatch(editTodo({
                        id: todo.id, newTitle: input
                    }));
                    setIsEditing(false)
                }}>edit</button>
            </>
                :
                <>
                    <button onClick={() => setIsEditing(true)}>اصلاح</button>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>حذف</button>
                </>
            }
        </div>
    )
}

export default TodoItem
