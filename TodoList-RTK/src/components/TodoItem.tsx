import { FC } from 'react'
import {useDispatch} from 'react-redux'
 import {removeTodo } from '../features/Todo/TodoSlice.ts'
interface Todo {
    id: string;
    title: string;
    isCompleted: boolean;
}
type TodoProps = {
    data: Todo
}

const TodoItem: FC<TodoProps> = ({ data }) => {
    console.log(
        data
    );
    const dispatch = useDispatch()

    return (
        <div>
            <p>
                {data.title}

            </p>
            <button onClick={()=>dispatch(removeTodo(data.id)) }>delete</button>

        </div>
    )
}

export default TodoItem
