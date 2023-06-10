import { ChangeEvent, MouseEvent, useState } from "react"

import Task from "./components/Task"
import { Button } from "./styles/Button.style"
import { Global } from "./styles/Global.style"
import { Input } from "./styles/Input.style"
import { Container, Form, Header } from "./styles/Main.style"

// define type for a task object
type Task = {
  id: number
  taskName: string
}

type InputChangeEvent = ChangeEvent<HTMLInputElement>
type FormEvent = MouseEvent<HTMLButtonElement>

export default function App() {
  // state to store each object of task inside array
  const [tasks, setTasks] = useState<Task[]>([])

  // state to handle the input change
  const [inputValue, setInputValue] = useState<string>("")

  const handleInput = (e: InputChangeEvent) => {
    setInputValue(e.target.value)
  }

  // add task using controlled component
  const addTask = (e: FormEvent) => {
    e.preventDefault()
    if (inputValue === "") return
    const newInput = {
      // increment the task id
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      taskName: inputValue,
    }
    //  check: if inputValue is truthy then add newInput to the tasks state otherwise previous task
    let addedTask = inputValue ? [...tasks, newInput] : tasks
    setTasks(addedTask)
    setInputValue("")
  }

  // delete task using filter by passing task id
  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  // Update task
  const updateTask = (taskId: number, newTaskName: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, taskName: newTaskName } : task
      )
    )
  }

  return (
    <Container>
      <Global />
      <Header>Task Manager</Header>

      {/* take input using form */}
      <Form>
        <Input
          type="text"
          placeholder="Enter your task"
          spellCheck="false"
          autoComplete="off"
          onChange={(e) => handleInput(e)}
          value={inputValue}
          autoFocus
        />
        <Button onClick={(e) => addTask(e)} type="submit">
          Add
        </Button>
      </Form>

      {/* display tasks */}
      <section>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </section>
    </Container>
  )
}
