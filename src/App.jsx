import { useState } from "react";
import Footer from "./Component/Footer";
import Heading from "./Component/Heading";
import Tasks from "./Component/Tasks";
import Input from "./Component/TodoInput";
import TodoItems from "./Component/TodoItems";
import EditTodo from "./Component/EditTodo";
import Form from "./Component/Form";

const App = () => {
  const [listTodo, setListTodo] = useState([]);
  const [showApp, setShowApp] = useState(false);
  const [userData, setUserData] = useState({});

  const addList = (titleText, detailText, selectedDate) => {
    if (titleText && detailText && selectedDate) {
      const newTodo = {
        id: Date.now(),
        title: titleText,
        detail: detailText,
        date: selectedDate,
        idEditing: false,
      };
      setListTodo([...listTodo, newTodo]);
    }
  };

  const deleteTodo = (id) => {
    setListTodo(listTodo.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setListTodo(listTodo.map((todo) =>
      todo.id === id ? { ...todo, idEditing: !todo.idEditing } : todo
    )
  );
  };

  const updateTodo = (id, newTitle, newDetail, newDate) => {
    setListTodo(listTodo.map((todo) =>
      todo.id === id
        ? { ...todo, title: newTitle, detail: newDetail, date: newDate, idEditing: false }: todo
      )
    );
  };

  const toggleComplete = (id) => {
    setListTodo(listTodo.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleFormSubmit = (data) => {
    setUserData(data);
    setShowApp(true);   // 👈 Ye hi ToDo App ko show karega
  };

  return (
    <div className="main_container">
      {!showApp ? (
        <Form onSubmit={handleFormSubmit} />    // 👈 Yaha Form dikh raha hai
      ) : (
        <>
          <Heading username={userData.username} />
          <Input addList={addList} />
            {listTodo.map((todo) =>
              todo.idEditing ? (
                <EditTodo
                  key={todo.id}
                  item={todo}
                  updateTodo={updateTodo}
                />
              ) : (
                <TodoItems
                  key={todo.id}
                  item={todo}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  toggleComplete={toggleComplete}
                />
              )
            )}
          <Tasks todos={listTodo} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
