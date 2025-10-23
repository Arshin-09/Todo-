import { SiTicktick } from "react-icons/si";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './TodoItems.css';

const TodoItems = ({ item, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className={`todo_container ${item.completed ? 'completed' : ''}`}>
      <div className="todo">
        <h2>
          {item.title} 
          <SiTicktick 
            onClick={() => toggleComplete(item.id)} 
            style={{ cursor: 'pointer', color: item.completed ? 'green' : 'black', marginLeft: '5px' }} 
          />
        </h2>
        <p>
          {item.detail} <FaEdit onClick={() => editTodo(item.id)} style={{ cursor: 'pointer' }} />
        </p>
        <h3>
          Start date: {item.date} <MdDelete onClick={() => deleteTodo(item.id)} style={{ cursor: 'pointer', marginLeft: '5px' }} />
        </h3>
      </div>
    </div>
  );
};

export default TodoItems;
