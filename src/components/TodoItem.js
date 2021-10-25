import React from "react"

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input
        type="checkbox" checked={this.props.list.completed}
        onChange={() => this.props.handleChangeProps(this.props.list.id)} />
        <button onClick={() => this.props.deleteTodoProps(this.props.list.id)}>
          Delete
        </button>
        {this.props.list.title}
      </li>
    )
  }
}

export default TodoItem