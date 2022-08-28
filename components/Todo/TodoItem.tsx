const TodoItem: React.FC<{
    text: string; onRemoveTodo:()=>void
}> = (props) => {
    return <li onClick={props.onRemoveTodo}>{props.text}</li>
}
export default TodoItem;