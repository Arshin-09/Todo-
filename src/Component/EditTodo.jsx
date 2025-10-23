import { useState } from "react";
import './EditTodo.css';
const EditTodo = ({ item, updateTodo }) => {
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDetail, setNewDetail] = useState(item.detail);
  const [newDate, setNewDate] = useState(item.date);

  return (
    <div className="todo-container">
      <div className="todoo">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Update title"
        />
        <input
          type="text"
          value={newDetail}
          onChange={(e) => setNewDetail(e.target.value)}
          placeholder="Update detail"
        />
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
        <button
          onClick={() => updateTodo(item.id, newTitle, newDetail,newDate)}
          style={{
            marginTop: "10px",
            padding: "5px 15px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditTodo;
