import { useState,useEffect } from "react";
import "./App.css";
import { Todoprovider } from "./context";
import Todoform from "./component/Todoform";
import TodoItem from "./component/Todoitem";

function App() {
  const [todos, settodos] = useState([]);
  const addTodo=(todo)=>{
    settodos((prev)=>[{id:Date.now(),...todo},...prev])
  }

  const updateTodo=(id,todo)=>{
    settodos((prev)=>prev.map((e)=>(e.id===id?todo:e)))
  }

  const deleteTodo=(id)=>{
    settodos((prev)=>prev.filter((todo)=>todo.id!==id))

  }

  const toggleTodo=(id)=>{
    settodos((prev)=>prev.map((e)=>e.id===id?{...e,completed:!e.completed}:e))
  }

  useEffect(() => {
    const todos=JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      settodos(todos)
    }
  }, [])

  useEffect(() => {
   localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  
  
  return (
    <>
      <Todoprovider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
        <div className="bg-[#c03c52] min-h-screen py-8 rounded-lg">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <Todoform/>
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}

              {
                todos.map((todo)=>(
                  <div key={todo.id} className="w-full">
                    <TodoItem todo={todo}/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </Todoprovider>
    </>
  );
}

export default App;
