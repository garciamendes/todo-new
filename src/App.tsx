// React
import React, { useContext, useState, KeyboardEvent, useRef } from 'react'

// Third party
import { PlusCircle } from '@phosphor-icons/react'

// Local
import './assets/styles/app.css'
import LogoImg from './assets/img/logo.svg'
import { Task } from './components/task'
import { TodoContext, TodoProvider } from './context/taskTodo'

const App = () => {
  // State
  const [task, setTask] = useState('')

  // Hook
  const { addTodo, todos, totalTaskChecked } = useContext(TodoContext)
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTodo(task)
      setTask('')
    } else {
      alert('Campo obrigatório')
    }
  }

  const handlePressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleAddTask()
    }
  }

  return (
    <div className='container'>
      <header>
        <img src={LogoImg} alt="" />
      </header>

      <div className='content-main-todo'>
        <div className='content-add-task'>
          <input
            type='text'
            value={task}
            ref={inputRef}
            onKeyDown={handlePressEnter}
            onChange={(e) => setTask(e.target.value)}
            placeholder='Adicione uma nova tarefa' />
          <button
            onClick={handleAddTask}>
            Criar
            <PlusCircle size={20} />
          </button>
        </div>

        <div className='content-info-task'>
          <strong className='title'>Concluídas:</strong>
          <span className='amount-task'>{totalTaskChecked}/{todos.length}</span>
        </div>

        <div className='container-tasks'>
          <Task />
        </div>
      </div>
    </div>
  )
}

export const TodoApp = () => {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  )
}