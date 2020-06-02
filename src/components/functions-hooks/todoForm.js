import React, { useState } from 'react';
import AddDate from "./datePick";

const TodoForm = ({addToDo}) => { 
     
    const [task, setTask] = useState(""); 
    const [date, setDate] = useState(new Date());
    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!task || !date) {
          return alert("Please enter task");
        }
        addToDo(task, date.toISOString().substr(0, 10));
        setTask('');  
        setDate(''); 
    }; 

    const handleOnChange = (event) => {
      return setTask(event.target.value);
    };

    const handleChange = (date) => {
      setDate(date);
    };
    // render form
    return (      
        <form  className="todo-form" onSubmit={onFormSubmit}>
          <label className="App-link">Add Task</label><br/>
          <input type="text" className="form-input" placeholder="Enter new task" value={task} onChange={handleOnChange}/>
          <AddDate onChange={handleChange} />      
          <button type="submit" className="btn btn-warning m-2">Add</button>           
        </form>      
    );
}

export default TodoForm;