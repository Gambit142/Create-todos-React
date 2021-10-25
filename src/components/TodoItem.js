import React from "react"
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
  handleEditing = () => {
    console.log("edit mode activated")
  }
  
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const { completed, id, title } = this.props.list

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing}>
          <input
          className={styles.checkbox}
          type="checkbox" checked={completed}
          onChange={() => this.props.handleChangeProps(id)} />
          <button onClick={() => this.props.deleteTodoProps(id)}>
            Delete
          </button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input type="text" className={styles.textInput} />
      </li>
    )
  }
}

export default TodoItem