import { FC, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, editTodo, setIsCompleted } from '../features/Todo/TodoSlice.ts'
import { Todo } from '../Types/Todo.ts'
// ICONS
import { FiEdit } from 'react-icons/fi'
import { AiTwotoneDelete } from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs'
import { MdCancel } from 'react-icons/md'

const iconStyle = {
    cursor: 'pointer'
}

interface TodoProps {
    todo: Todo
}

const TodoItem: FC<TodoProps> = ({ todo }) => {
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(false)
    const [input, setInput] = useState(todo.title)
    return (
        <div className='flex gap-6 items-center flex-wrap w-11/12 sm:w-4/6 max-w-sm bg-teal-300 min-h-[40px] mx-auto my-2 rounded-xl px-1'>
            <div className='w-4/6 px-6 py-1 overflow-scroll'>
                {isEditing ?
                    <input value={input}
                        className='w-[150px] sm:w-full ring-1 ring-teal-500 focus:outline-none focus:ring-2 rounded-lg px-3 py-0.5 bg-teal-50'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} />
                    : <p title='درصورت تکمیل کلیک کنید' onClick={() => dispatch(setIsCompleted(todo.id))} className={`${todo.isCompleted && 'line-through decoration-slate-500 opacity-75'} text-lg font-semibold`}>{todo.title} </p>}
            </div>
            {isEditing ? <>
                <MdCancel style={iconStyle} size="24px" onClick={() => setIsEditing(false)} />
                <BsCheckCircleFill style={iconStyle} size="22px" onClick={() => {
                    dispatch(editTodo({
                        id: todo.id, newTitle: input
                    }));
                    setIsEditing(false)
                }} />
            </>
                :
                <>
                    <FiEdit title='اصلاح متن' style={iconStyle} size='24px' onClick={() => setIsEditing(true)} />
                    <AiTwotoneDelete title='حذف' style={iconStyle} size="26px"
                        onClick={() => dispatch(removeTodo(todo.id))} />
                </>
            }
        </div>
    )
}

export default TodoItem
