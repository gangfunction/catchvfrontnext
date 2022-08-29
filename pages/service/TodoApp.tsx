import NewTodo from "../../components/Todo/NewTodo";
import Todos from "../../components/Todo/Todos";
import TodosContextProvider from "../../store/todo-context";



function TodoApp(){
    return(
        <div>
            <TodosContextProvider>
                <Todos />
                <NewTodo />

            </TodosContextProvider>
        </div>
    )
}

export default TodoApp;