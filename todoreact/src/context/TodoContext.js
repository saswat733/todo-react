import { useContext,createContext } from "react";
export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"hellow how are you",
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
})


export const Usetodo=()=>{
    return useContext(TodoContext)
}

export const Todoprovider=TodoContext.Provider