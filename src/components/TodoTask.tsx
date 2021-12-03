import React from 'react'
import { Tasks } from '../Types'

type TaskProps = {
  task: Tasks
  completeTask: (taskToDelete: string) => void
}
export const TodoTask = ({ task, completeTask }: TaskProps) => {
  return (
    <div className='task'>
      <div className='content'>
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName)
        }}
      >
        X
      </button>
    </div>
  )
}
