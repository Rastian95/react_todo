import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';
import Axios from 'axios';

function App() {

   const [todos, setState] = useState([
        {
          id: uuid.v4(),
          title: "Take out the trash",
          completed: false
        }
    ])

    // const fetchTodos = async () => {
    //   const response = await Axios.get(`https://jsonplaceholder.typicode.com/todos`);
    
    //   setState(response.data);
    // };
    
    // useEffect( () => { fetchTodos(todos) }, [ todos ] );

    // Toggle complete
   let markComplete = (id) => {
    setState(todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      }));
  }

  //Delete 
  let delTodo = (id) => {
    console.log(id);
    setState(todos.filter(todo => 
      todo.id !== id));
  }

   //Add Todo 
   let addTodo = (title) => {
     
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    setState([...todos, newTodo]);
  }

  return (
    <Router>
      <div className="App">
        <div className="Container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} markComplete={markComplete} 
              delTodo = {delTodo}/>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
   </Router>
  );
}

export default App;
