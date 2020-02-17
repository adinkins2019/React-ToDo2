import React, {Component} from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

 addTodo = (e, todo) => {
   e.preventDefault();

   const newTodo = {
     task: todo,
     id: Date.now(),
     completed: false
   };

   this.setState({
     todos: [...this.state.todos, newTodo]
   });
 }

 toggleTodo = taskId => {
   this.setState({
     todos: this.state.todos.map(
       todo => {
         if(taskId === todo.id){
           return  {
             ...todo, 
             completed: !todo.completed
           }
         }
        return todo;
       }
     )
   })
 }

 clearCompleted = e => {
   e.preventDefault();
   this.setState({
     todos: this.state.todos.filter(todo => todo.completed === false)
   })
   
 }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          addTodo={this.state.addTodo}
          clearCompleted={this.state.clearCompleted}
        />
        <TodoList 
          todos={this.state.todos}
          toggleTodo={this.state.toggleTodo}

        />
      </div>
    );
  }
}

export default App;
