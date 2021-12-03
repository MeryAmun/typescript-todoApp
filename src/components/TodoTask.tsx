import React from 'react'
import { Tasks } from '../Types'

type TaskProps = {
  task: Tasks
}
export const TodoTask = (props: TaskProps) => {
  return (
    <div>
      <h2>Tasks</h2>
      <p>{props.task.taskName}</p>
      <p>{props.task.deadline}</p>
    </div>
  )
}
