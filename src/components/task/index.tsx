// React
import React, { useContext, useEffect, useState } from 'react'

// Third party
import { Trash } from '@phosphor-icons/react'

// Project
import '../../assets/styles/task.css'
import { EmptyContainer } from '../empty-container'
import { TodoContext } from '../../context/taskTodo'

export interface ITask {
  id: string,
  task: string
  isChecked: boolean
}


export const Task = () => {
  const {todos: listTasks, removeTodo, setCheck } = useContext(TodoContext)

  return (
    <>
      {(listTasks?.length <= 0) ? (
        <EmptyContainer />
      ) : (
        listTasks?.map(({ id, task, isChecked }) => (
          <div className='container-task'>
            <React.Fragment key={id}>
              <div className='check-content'>
                <input type='checkbox' id={`task-${id}`} />
                <label onClick={() => setCheck(id)} htmlFor={`task-${id}`}></label>
              </div>
              <p className={`content-task ${isChecked ? 'checked' : ''}`}>{task}</p>
              <div className='content-trash'>
                <Trash className='icon-trash' size={26} onClick={() => removeTodo(id)} />
              </div>
            </React.Fragment>
          </div>
        ))
      )}
    </>
  )
}