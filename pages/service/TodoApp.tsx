import NewTodo from "../../components/Todo/NewTodo";
import Todos from "../../components/Todo/Todos";



function TodoApp(){
    return(
        <div>
            <Todos />
            <NewTodo />
        </div>
    )
}

export default TodoApp;