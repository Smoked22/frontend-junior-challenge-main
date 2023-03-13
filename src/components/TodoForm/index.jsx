import React, { useState } from "react";
import "./styles.css";

const TodoForm = ({nombre}) => {
    
    const[nombreTarea, setNombreTarea] = useState("")

    const addTask = (task) => {
        setNombreTarea(task.target.value)
    }
    return(<>
        <form>
            <input type='text' value={nombreTarea} className="text-todo" onChange={addTask} required></input>
            <button type="button" className="button-todo" onClick={()=>nombre(nombreTarea)}>
                Add to do
            </button>
        </form>
        </>
    );
};
export default TodoForm;