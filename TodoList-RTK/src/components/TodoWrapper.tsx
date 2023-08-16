import TodoItem from "./TodoItem"
import { useSelector } from 'react-redux'
const TodoWrapper = () => {
    const todos = useSelector((store: any) => store.todo)
    interface Todo {
        id: string;
        title: string;
        isCompleted: boolean;
    }
    return (
        <div>
            {todos.map(((item: Todo) => <TodoItem key={item.id} data={item} />))}
        </div>
    )
}

export default TodoWrapper
