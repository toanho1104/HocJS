import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss'
TodoList.propTypes = {
  todoList: PropTypes.array,
  onClick: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  onclick: null,
}



function TodoList({ todoList, onClick }) {
  const handleTodoList = (item, index) => {
    onClick(item, index)
  }
  return (
    <ul className='todo-list'>
      {todoList.map((item, index) => (
        <li
          onClick={() => { handleTodoList(item, index) }}
          key={item.id}
          className={classNames({
            completed: item.status === 'completed'
          })}
        >
          {item.title}</li>
      )
      )}
    </ul>
  );
}

export default TodoList;