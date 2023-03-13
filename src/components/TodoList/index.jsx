import React from "react";
import "./styles.css";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getAllData } from "app/getAll/actions";
import { useState } from "react";
import TodoListItem from "../TodoListItem";
import TodoForm from "components/TodoForm";
import TodoResults from "../TodoResults";


const TodoList = () => {

  const {data,loading} = useSelector(state => state.getAll)
  const dispatch = useDispatch()
  const [countDone, setCountDone] = useState('0')
  
  const [tareas, setTasks] = useState([]);

  useEffect(() => {
    dispatch(getAllData())
  },[]
  );

  useEffect(() => {
    setTasks(data)
  },[data]
  );

  useEffect(() => {
    if (tareas){
      const valores = tareas.filter((elemento) => elemento.checked).length > 0 ? tareas.filter((elemento) => elemento.checked).length : 0;
      setCountDone(valores)
    }
  },[tareas]
  );


  const addTodo = (newTodo) =>{
    const lastIndex = tareas ? tareas[tareas.length - 1] : 0
    const lastId = lastIndex?.id + 1 
    const newTask ={
      id: lastId ? lastId : 0,
      label: newTodo,
      checked: false
    }
    setTasks([ ...tareas, newTask])
  };

  const handleDelete = (todoId) => {
    const newData = tareas.filter((item) => item.id !== todoId);
    setTasks(newData);
  };

  const toggleCheck = (todoId, isChecked) => {
    const index = tareas.findIndex(elemento => elemento.id === todoId); 
    const nuevasTareas = [...tareas];
    nuevasTareas[index] = {...nuevasTareas[index], checked: !isChecked};
    setTasks(nuevasTareas);
  };


  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do : {tareas ? tareas.length:0}</span>
      <div className="todo-list-content">
        {
          !loading && tareas ? (
            tareas.length > 0 ? (
              tareas.map((tarea) =>(
                <div key={tarea.id}>
                  <TodoListItem onCheck={()=>toggleCheck(tarea.id, tarea.checked)} checked={tarea.checked} label={tarea.label} onDelete={()=>handleDelete(tarea.id)}/>
                </div>
              ))
            ):<span>"Looks like you're absolutely free today!"</span>
          ):<h1>No hay datos</h1>
        }
      </div>
      <div className="no-todos">
        <span>{tareas ? "" :"Looks like you're absolutely free today!"}</span>
      </div>
      <TodoResults countDone={countDone}/>
      <TodoForm nombre={(nombreTarea)=>addTodo(nombreTarea)}/>
    </div>
  );
};
export default TodoList;
