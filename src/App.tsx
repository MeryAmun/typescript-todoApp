import './App.css'

import React, { useState } from 'react'

import { Tasks } from './Types'

type headerProps = {
  task: string
  deadline: number
}

type ButtonProps = {
  addTask: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const App: React.FC<headerProps> = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<Tasks[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    setTodoList([...todoList, newTask])
    console.log(todoList)
    setTask('')
    setDeadline(0)
  }

  return (
    <div className='App'>
      <div className='header'>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Task...'
            name='task'
            value={task}
            onChange={handleChange}
          />
          <input
            type='number'
            name='deadline'
            value={deadline}
            placeholder='Deadline (in days)...'
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todo-list'></div>
    </div>
  )
}

export default App
