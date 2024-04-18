import { useState } from 'react';
import './App.css';

function App() {
  const [toDos,setTodos] = useState([]);
  const [toDo,setTodo] = useState('')
  




  return (
    <div className="App">
      <div className="container">
        <h1 style={{color:'white'}} >Todo App</h1>
        <div className="todo-app">
          <section className="section section-todo">
            <h2>To Do</h2>
            <ul className="task-list">
              <div className="tasks">
                <li className="task-item">
                  <div className="task-input-container">
                    <input type="text" value={toDo} onChange={(e)=>setTodo(e.target.value)} className="input-task" placeholder="Enter task" />
                    <button onClick={()=>setTodos([...toDos,{data:toDo,id:Date.now(),status:false}])} className="task-add">Add</button>
                  </div>
                </li>
              </div>
            </ul>
            <br />
            <ul className="task-list">
              <div className="tasks">
                {
                  toDos.map((value)=>{
                    return(
                      <li className="task-item">
                      <input type="checkbox" onChange={(e)=>{
                        console.log(value.status);
                        setTodos(toDos.filter(obj2=>{
                          if(obj2.id === value.id){
                            obj2.status = e.target.checked
                          }
                          return obj2
                        }))
                      }}  value={value.status} className="task-checkbox" />
                      <label htmlFor="task-1" className="task-label">{value.data}</label>
                      <button className="task-delete" onClick={()=>{
                        setTodos(toDos.filter((obj2)=>obj2.id !== value.id))

                      }}>x</button>
                    </li>
                    )

                  })
                }
               
                
              </div>
              {/* Add more task items here */}
            </ul>
          </section>
          <section className="section section-pending">
            <h2>Pending</h2>
            <ul className="task-list">
              <div className="tasks">
                {
                  toDos.map((obj2)=>{
                    if(!obj2.status){
                      return(
                        <li className="task-item">
                  <label htmlFor="task-1" className="task-label">{obj2.data}</label>
                  </li>
                      )

                    }
                    return null
                    
                  })

                }
                
                
              </div>
            </ul>
          </section>
          <section className="section section-completed">
            <h2>Completed</h2>
            <ul className="task-list">
            <div className="tasks">
                {
                  toDos.map((obj2)=>{
                    if(obj2.status){
                      return( 
                        <li className="task-item">
                        <del><label htmlFor="task-1" className="task-label">{obj2.data}</label></del>
                        </li>
                      )
                    }
                    return null

                  })
                }
                
                

                
              </div>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
