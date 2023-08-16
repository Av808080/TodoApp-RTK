import TodoItem from "./TodoItem"
import { useSelector } from 'react-redux'
import { Todo } from "../Types/Todo"
const TodoWrapper = () => {
    const todos = useSelector((store: any) => store.todo)
  
    return (
        <div>
            {todos.map(((item: Todo) => <TodoItem key={item.id} data={item} />))}
        </div>
    )
}

export default TodoWrapper
