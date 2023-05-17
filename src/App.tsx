// Third party
import { PlusCircle } from '@phosphor-icons/react'

// Local
import LogoImg from './static/img/logo.svg'
import './static/styles/app.css'
import { useState } from 'react'
import { EmptyContainer } from './components/empty-container'

export const App = () => {
  const [listTasks, setListTasks] = useState([])

  return (
    <div className='container'>
      <header>
        <img src={LogoImg} alt="" />
      </header>

      <div className='content-main-todo'>
        <div className='content-add-task'>
          <input
            type='text'
            placeholder='Adicione uma nova tarefa'/>
          <button>
            Criar
            <PlusCircle size={20} />
          </button>
        </div>

        <div className='content-info-task'>
          <strong className='title'>Concluídas:</strong>
          <span className='amount-task'>10/20</span>
        </div>

        <div className='container-tasks'>
          {listTasks.length <= 0 ? (
            <EmptyContainer />
          ) : null}
        </div>
      </div>
    </div>
  )

}