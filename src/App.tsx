import { useAuth0 } from "@auth0/auth0-react"
import { ChangeEvent, MouseEvent, useState } from "react"

import Loader from "./components/Loader"
import Login from "./components/Login"
import Logout from "./components/Logout"
import Task from "./components/Task"
import UserDetails from "./components/UserDetails"
import { Button } from "./styles/Button.style"
import { Global } from "./styles/Global.style"
import { FilterInput, Input } from "./styles/Input.style"
import { Container, Form, Header, UserSection } from "./styles/Main.style"

// define type for a task object
type Task = {
  id: number
  taskName: string
}

type InputChangeEvent = ChangeEvent<HTMLInputElement>
type FormEvent = MouseEvent<HTMLButtonElement>

export default function App() {
  const { isAuthenticated, isLoading } = useAuth0()

  // state to store each object of task inside array
  const [tasks, setTasks] = useState<Task[]>([])

  // state to handle the input change
  const [inputValue, setInputValue] = useState<string>("")

  // state to get the filter input
  const [filterInput, setFilterInput] = useState<string>("")

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

  // filter the task array based on the filterInput
  const filteredTask: Task[] = tasks.filter((task) =>
    task.taskName.toLowerCase().includes(filterInput.toLocaleLowerCase())
  )

  if (isLoading) return <Loader />

  return (
    <>
      <Container>
        <Global />
        {isAuthenticated ? (
          <>
            <Header>Task Manager</Header>
            <UserSection>
              <UserDetails />
              <Logout />
            </UserSection>
            {/* take input using form */}
            <Form>
              <Input
                type="text"
                placeholder="Enter your task"
                spellCheck="false"
                autoComplete="off"
                onChange={(e) => handleInput(e)}
                value={inputValue}
              />

              <Button onClick={(e) => addTask(e)} type="submit">
                Add
              </Button>

              <FilterInput
                type="text"
                placeholder="Filter"
                spellCheck="false"
                autoComplete="off"
                onChange={(e) => setFilterInput(e.target.value)}
              />
            </Form>

            {/* display tasks */}
            <section>
              {filteredTask.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                />
              ))}
            </section>
          </>
        ) : (
          <Login />
        )}
      </Container>
    </>
  )
}
