import './Tasks.css';
import UserGroup from "../assets/UserGroup.png";
const Tasks = ({ todos }) => {
  const completed = todos.filter(todo => todo.completed).length;
  const pending = todos.length - completed;

  return (
    <div className="task_container">
      <div className="complete">
        <h2>Complete<br />Tasks</h2>
        <h1>{completed}</h1>
      </div>
      <div className="pending">
        <h2>Pending<br />Tasks</h2>
        <h1>{pending}</h1>
      </div>
      <div className="task_create">
        <div className='box1'>
          <h1>Task Created<br />{todos.length}</h1>
        </div>
        <div className='box2'>
          <h3>25K+ Active Users</h3>
          <img src={UserGroup}  />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
