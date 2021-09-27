import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from "./components/TodoList/index";
import { Route, Switch, useRouteMatch } from 'react-router';
import TodoListFeature from "./pages/TodoList/index";

TodoFeature.propTypes = {

};

function TodoFeature(props) {

  const match = useRouteMatch()
  // console.log(match)
  return (
    <div>
      adfalsjfd
      <Switch>
        <Route path={`${match.path}`} component={TodoListFeature} exact />
      </Switch>
    </div>
  );
}

export default TodoFeature;