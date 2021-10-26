import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = props => {
  const [title, setTitle] = useState("")

  const onChange = e => {
    setTitle(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (title === '') {
      alert('Please Write Item')
    } else {
      props.addTodoProps(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">
        <FaPlusCircle 
          style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}/>
      </button>
    </form>
  )
}

export default InputTodo