import './index.css'

const TodoItem = props => {
  const {TodoDetails, deleteTodo} = props
  const {title, id} = TodoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-Container">
      <div className="itemAndButtonContainer">
        <p className="todoName">{title}</p>
        <div>
          <button type="button" className="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
