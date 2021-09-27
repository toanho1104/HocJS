
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from "../../components/TodoList/index";
import { useLocation } from 'react-router';
import queryString from 'query-string'
import TodoForm from '../../components/TodoForm';

TodoListFeature.propTypes = {

};

function TodoListFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: "new"
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Code',
      status: 'new'
    },
  ]

  const location = useLocation()
  const [todoList, setTodoList] = useState(initTodoList)
  const [filterStatus, setFillterStatus] = useState(() => {
    const params = queryString.parse(location.search)
    // console.log(params)
    return params.status || 'all'
  })

  const handleTodoList = (item, index) => {
    // clone array 
    const newTodoList = [...todoList];

    newTodoList[index] = {
      ...newTodoList[index],
      status: item.status === 'new' ? 'completed' : 'new'
    }
    setTodoList(newTodoList)
  }

  const handlefilAll = () => {
    setFillterStatus('all')
  }
  const handlefilNew = () => {
    setFillterStatus('new')
  }
  const handlefilCompleted = () => {
    setFillterStatus('completed')
  }

  const renderTodoList = todoList.filter(item => filterStatus === 'all' || item.status === filterStatus)
  const handleTodoForm = (values) => {
    console.log('form submit', values)
  }

  return (
    <div>
      <h3>Todo form</h3>
      <TodoForm onSubmit={handleTodoForm} />
      <h3>Todo List</h3>
      <TodoList
        todoList={renderTodoList}
        onClick={handleTodoList}
      />
      <button onClick={handlefilAll}>All</button>
      <button onClick={handlefilNew}>New</button>
      <button onClick={handlefilCompleted} >Completed</button>
    </div>
  );
}

export default TodoListFeature;