// React
import React, { createContext, useState } from 'react'

// Third part
import uuid from 'react-uuid'

// Project
import { ITask } from '../components/task'

interface IContextTodo {
  todos: ITask[]
  totalTaskChecked: number
  removeTodo(id: string): void
  setCheck(id: string): void
  addTodo(task: string): void
}

const TodoContext = createContext({} as IContextTodo);

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<ITask[]>([])
  let totalTaskChecked = todos.filter(item => item.isChecked !== false).length

  function addTodo(task: string){
    const newTodo = { 'id': uuid(), 'task': task, 'isChecked': false }

    setTodos([...todos, newTodo])
  }

  function removeTodo(id: string) {
    const updatedTodos = todos.filter((todo: ITask) => todo.id !== id)
    setTodos(updatedTodos)
  }



  function setCheck(id: string) {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isChecked: !todo.isChecked
          }
        }
        return todo
      })
    })
  }

  const value = {
    todos,
    totalTaskChecked,
    addTodo,
    removeTodo,
    setCheck
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export { TodoContext, TodoProvider }