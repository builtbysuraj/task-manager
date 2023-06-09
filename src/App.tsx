import { useState } from "react"

export default function App() {
  const [tasks, setTasks] = useState<any>([])
  const [inputValue, setInputValue] = useState<any>()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const addTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const newInput = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,

      taskName: inputValue,
    }
    let addedTask = inputValue ? [...tasks, newInput] : tasks
    setTasks(addedTask)
  }

  const deleteTask = (taskId: number) => {
    let newTask = tasks.filter((task: any) => {
      if (task.id === taskId) {
        return false
      } else {
        return true
      }
    })

    setTasks(newTask)
  }

  return (
    <main>
      <h1>Task Manager</h1>
      <form>
        <input
          type="text"
          placeholder="Enter your task"
          spellCheck="false"
          autoComplete="false"
          onChange={(e) => handleInput(e)}
        />
        <button onClick={(e) => addTask(e)} type="submit">
          Add
        </button>
      </form>

      {/* display tasks */}
      <section>
        {tasks.map((ele: any, i: number) => (
          <div key={i}>
            <span> {ele.taskName} </span>
            <button onClick={() => deleteTask(ele.id)}>delete</button>
          </div>
        ))}
      </section>
    </main>
  )
}
