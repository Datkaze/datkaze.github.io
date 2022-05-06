import { useState } from 'react'
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([0]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setCreating(true);

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({userId: 1,title, completed: false}),
    })
    .then((res)=>res.json())
    .then((json)=>{
      const newTodo = {...json, title, userId: 1, completed: false};
      setTodos([])
    })
  }

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
  .then((res)=> res.json())
  .then((json)=>{
    setLoading(false);
    setTodos(json);
  })
  .catch((error)=>{
    setLoading(false);
    setError(error);
  });
}, []);

if (loading) {
  return(
    <p>Loading...</p>
  );
}

if (error){
  
    console.log(error)

    return(
      <p>Có lỗi xảy ra khi lấy dữ liệu</p>
    );
}

  return(
    <div>
      <h1>Todo App</h1>
      <form action=""></form>

      <div className='title'>{todo.title}</div>
      <div className='checkbox'></div>
    </div>
  );

  // {todos.map((todo)=>{
  //   return(
  //     <div key={todo.id} className="task">
  //       <div className='title'>{todo.title}</div>
  //       <div className={todo.completed ? 'checkbox completed' : 'checkbox'}></div>
  //     </div>
  //   );
  }




