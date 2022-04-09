// const { useState } = React;

// const App = () =>{
//     const clicked = (e, id) =>{
//         console.log("Clicked!");
//         console.log(e);
//         console.log(id);
//     };

//     return(
//         <div>
//             <h1 onClick={() => clicked (1)}>Hello</h1>
//             <h1 onClick={() => clicked (1)}>Hello</h1>
//             <h1 onClick={(e) => clicked (e, 3)}>Hello</h1>
//         </div>
//     );
// };

// ReactDOM.render(<App/>, document.getElementById("app"));


const { useState } = React;

const TodoItem = ({ id, title, onClick}) => {
   const handleClick = () =>{
       if (confirm("Delete this task?")) onClick(id);
   }
   return(
    <li className="todo-item">
        {title}
        <button onClick={handleClick}>Delete</button>
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
        if(confirm("Delete all tasks?")) onClick();
    };
    if (pending > 0) {
        return(
            <div className="todo-sumary">
                You have {pending} pending 
                <button onClick={handleClick}>Clear All</button>
            </div> 
        );
    }else{
        return(
            <div className="todo-sumary">
                All done
            </div>
        )
    }
};

const TodoApp = () =>{
    const[tasks, setTasks] = useState([
        {
            id: Math.random(),
            title: "Buy a new gaming laptop",
        },
        {
            id: Math.random(),
            title: "Complete previous homework",
        },
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


ReactDOM.render(<TodoApp/>, document.getElementById("app"));