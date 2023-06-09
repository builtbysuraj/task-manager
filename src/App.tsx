import { ChangeEvent, MouseEvent, useState } from "react"
import Task from "./components/Task"

type Task = {
  id: number
  taskName: string
}

type InputChangeEvent = ChangeEvent<HTMLInputElement>
type FormEvent = MouseEvent<HTMLButtonElement>

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState<string>("")

  const handleInput = (e: InputChangeEvent) => {
    setInputValue(e.target.value)
  }

  // add task function
  const addTask = (e: FormEvent) => {
    e.preventDefault()
    const newInput = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      taskName: inputValue,
    }
    let addedTask = inputValue ? [...tasks, newInput] : tasks
    setTasks(addedTask)
  }

  // delete task function
  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <main>
      <h1>Task Manager</h1>
      <form>
        <input
          type="text"
          placeholder="Enter your task"
          spellCheck="false"
          autoComplete="off"
          onChange={(e) => handleInput(e)}
        />
        <button onClick={(e) => addTask(e)} type="submit">
          Add
        </button>
      </form>

      {/* display tasks */}
      <section>
        {tasks.map((task, index) => (
          <Task
            key={task.id}
            task={task}
            index={index}
            deleteTask={deleteTask}
          />
        ))}
      </section>
    </main>
  )
}
