// React
import React from 'react'

// Third party
import { ClipboardText } from '@phosphor-icons/react'

// Project
import '../../assets/styles/empty.css'

export const EmptyContainer = () => {
  return (
    <div className='container-empty'>
      <ClipboardText className='icon-emtpy' size={72} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}