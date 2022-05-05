import React from 'react';
import TodoList from './TodoList';
import Login from './components/Login'
import New from './New'

function App() {
  return (
    <div>
    <TodoList name="Caleb" />
    <Login name="Caleb" />
    <Login name="Evony"/>
    <Login name="Ava"/>
    <Login />
    <New />
    </div>
  ) 
}
export default App;
