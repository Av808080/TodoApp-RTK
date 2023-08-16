import { useState, ChangeEvent } from 'react'
import TodoItem from "./TodoItem"
import { useSelector } from 'react-redux'
import { Todo } from "../Types/Todo"
const TodoWrapper = () => {
    const todos = useSelector((store: any) => store.todo)
    const [filterBy, setFilterBy] = useState('همه')
    return (
        <div>
            {!!todos.length&&
                <select className='bg-teal-300 focus:outline-none ring-2 ring-teal-400 rounded-lg block mx-auto mb-8 mt-4'
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setFilterBy(e.target.value)}
            >
                <option value='All' >همه</option>
                <option value='Completed' >تکمیل شده</option>
                <option value='Uncompleted' >تکمیل نشده</option>
            </select>
            }
            {filterBy === 'Completed' ? todos.map((item: Todo) => item.isCompleted && <TodoItem key={item.id} todo={item} />) :
                filterBy === 'Uncompleted' ? todos.map((item: Todo) => !item.isCompleted && <TodoItem key={item.id} todo={item} />) :
                    todos.map(((item: Todo) => <TodoItem key={item.id} todo={item} />))
            }
        </div>
    )
}

export default TodoWrapper
