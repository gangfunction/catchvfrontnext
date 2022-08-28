import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import {TodosContext} from "../../store/todo-context";

const Todos: React.FC = ()=>{
    const todosCtx = useContext(TodosContext);
    return(
        <>
            <ul>
                {todosCtx.items.map((item)=>(
                    <TodoItem
                        key={item.id}
                        onRemoveTodo={todosCtx.removeTodo.bind(null,item.id)}
                        text={ item.text}
                    />
                ))}
            </ul>
        </>
    );
}
export default Todos;