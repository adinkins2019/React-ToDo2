import React, {Component} from 'react';

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
             completed: !completed
           }
         }
        return todo;
       }
     )
   })
 }

 clearCompleted = e => {
   e.preventDefault();
   
 }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
