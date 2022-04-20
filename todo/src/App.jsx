import { useState } from 'react'
import './App.css'


const TodoItem = ({ id, title, onClick}) => {
   const handleClick = () =>{
       onClick(id);
   }
   return(
    <li className="todo-item">
        <p>{title}</p>
        <button className="btn-delete" onClick={handleClick}><i class="fas fa-trash-alt"></i></button>
    </li>
    );
};

  const TodoList = ({ tasks, onClick }) => {
      return(
        <ul className="todo-list">
            {tasks.map((tasks) => (
                <TodoItem key={tasks.id} {...tasks} onClick={onClick}/>
            ))}
        </ul>
      );
  };

const TodoForm = ({ onSubmit }) => {
    return(
        <form action="" onSubmit={onSubmit}>
            <div className="form">
                <input type="text" placeholder="Add new todo" name="title"/>
                <button>Add</button>
            </div>
        </form>
    );
};

const TodoSumary = ({pending, onClick}) => {
    const handleClick = () => {
        onClick();
    };
    if (pending > 0) {
        return(
            <div className="todo-sumary">
               <p>You have <strong>{pending}</strong> pending </p>    
                <button onClick={handleClick}>Clear All</button>
            </div> 
        );
    }else{
        return(
            <div className="todo-sumary">
                <p>You have <strong>{pending}</strong> pending </p>   
                <button onClick={handleClick}>Clear All</button>
            </div>
        )
    }
};

const App = () =>{
    const[tasks, setTasks] = useState([
        
    ]);
     
    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target.elements.title.value.trim();

        console.log(title)

        if(title != ""){
            const newTasks = [
                ...tasks,
                {
                    id: Math.random(),
                    title,
                }
            ];

            setTasks(newTasks);

            e.target.elements.title.value = "";   
        }
    };

    const handleDelete = (id) => {
        const newTasks = tasks.filter((task) => task.id != id);
        setTasks(newTasks);
    }

    const handleClearAll = () => {
        const newTasks = [];
        setTasks(newTasks);
    };

    return(
        <div className="todo-app">
            <h1 className="heading">
                Simple TodoApp
            </h1>

            <TodoForm onSubmit={handleSubmit}/>

            <TodoList tasks={tasks} onClick={handleDelete}/>

            <TodoSumary pending={tasks.length} onClick={handleClearAll}/>
        </div>
    );
};


export default App
