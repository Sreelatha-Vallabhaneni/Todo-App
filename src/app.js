import React from 'react';
import './app.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import TodoHeader from'./components/functions-hooks/todoHeader';
import AddItem from './components/functions-hooks/addTask';
import WatchCount from './components/timer';


library.add(faTrash);

function App() {
  return (
    <div className="todo-App">
      <TodoHeader/>
      <WatchCount/>
      <AddItem/>
    </div>
  );
}

export default App;
