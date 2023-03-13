import React from "react";
import "./styles.css";
import {useSelector} from "react-redux";
import {useEffect,useState} from "react";

const TodoResults = ({countDone}) => {
  // Fix an ability to calculate completed tasks
  return <div className="todo-results">Done:{countDone? countDone: 0}</div>;
};

export default TodoResults;
