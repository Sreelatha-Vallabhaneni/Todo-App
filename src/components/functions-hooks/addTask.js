import React, { useState, useEffect } from "react";
import TodoForm from "./todoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddItem = () => {
  //Declare a state variable as todos
  const [todos, setTodo] = useState([{}]);
  const ROOT_URL =
    "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

  useEffect(() => {
    (async () => {
      const response = await fetch(ROOT_URL);
      const result = await response.json();
      setTodo(result);
    })();
  }, []);
  
  //updating the state / to updating the array with new obj
  const addToDo = (title, newDeadLine) => {
    return setTodo([...todos, {id : todos[todos.length-1]?.id+1 || 1, 
        description : title,
        deadline : newDeadLine,
        isChecked : false,
        isEdit : false}])
  };

  //Toggle todo
  const completeTodo = (id) => {
    setTodo(prev => prev.map(todo => {
        const newTodo = {...todo};
        if (todo.id === id) {
          newTodo.isChecked = !newTodo.isChecked;
          }
          return newTodo;
      }))
  }
  //remove task
  const removeTodo = (id) => {
    setTodo(prev => prev.filter(todo =>{ 
        const newTodo = {...todo};
        return newTodo.id !== id
      }));   
  } 
  //Edit task
  const editTodo = (id, newTask) => {      
      setTodo(prev => prev.map(todo => { 
        const newTodo = { ...todo };
        if (todo.id === id) {
          newTodo.isEdit = !newTodo.isEdit 
          return { ...newTodo, description: newTask }; 
        }
        return newTodo;       
      }));  
    }
  
  const handleOnChange = (e) => {
    return setTodo({ [e.target.name]: e.target.value });
  };
  const descriptionChange = (id, text) => {
    setTodo((prev) =>
      prev.map((todo) => {
        const newTodo = { ...todo };
        if (todo.id === id) {
          return { ...newTodo, description: text };
        }
        return newTodo;
      })
    );
  };
  let cbRef = null;
  const setCbRef = (element) => {
    cbRef = element;
  };
  useEffect(() => {
    if (cbRef) {
      cbRef.focus();
    }
  }, [cbRef]);

  console.log("render");


  return (
    <div className="App list-items">
      <TodoForm addToDo={addToDo}/>
      <div>
        <ul className="list">
          {todos.length === 0? <p>No items....</p> : todos.map((todo, id) => (
            <li key={id} className="todo m-4">
              <span className="all-titles" style={{ textDecoration: todo.isChecked ? "line-through" : ""}}>
                {todo.isEdit ?
                <input
                type="text"
                name="description"
                ref={setCbRef}
                value={todo.description}
                onChange={(e) => descriptionChange(todo.id, e.target.value)}/> : 
                <React.Fragment>
                  {todo.description} {"|"} {todo.deadline}
                </React.Fragment>
                }
              </span>
              <input className="check-box"              
              type="checkbox"
              onClick={() => completeTodo(todo.id)}
              checked={todo.isChecked}
              name="isChecked"
              onChange={() => handleOnChange}/>
              <button className="btn" onClick={() => removeTodo(todo.id)}><FontAwesomeIcon className="faicons m-2" onClick={() => { removeTodo(id); }} icon="trash"/></button>
              <button className="btn btn-success m-4" onClick={() => {editTodo(todo.id, todo.description)}}>
                {!todo.isEdit ? "Edit" : "Update"}
              </button>           
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



export default AddItem;