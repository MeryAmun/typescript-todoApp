import React from 'react'
import { Tasks } from '../Types'

type TaskProps = {
  task: Tasks
}
export const TodoTask = ({ task }: TaskProps) => {
  return (
    <div className='task'>
      <div className='content'>
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button>X</button>
    </div>
  )
}
