import { ChangeEvent, MouseEvent, useState } from "react"
import { Button } from "../styles/Button.style"
import { Input } from "../styles/Input.style"
import { Form } from "../styles/Main.style"

type InputChangeEvent = ChangeEvent<HTMLInputElement>
type FormEvent = MouseEvent<HTMLButtonElement>

type TaskFormProps = {
  addTask: (taskName: string) => void
}

export default function TaskForm({ addTask }: TaskFormProps) {
  // state to handle the input change
  const [inputValue, setInputValue] = useState<string>("")

  const handleInput = (e: InputChangeEvent) => {
    setInputValue(e.target.value)
  }

  // add task using controlled component
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (inputValue === "") return
    addTask(inputValue)
    setInputValue("")
  }

  return (
    <Form>
      <Input
        type="text"
        placeholder="Enter your task"
        spellCheck="false"
        autoComplete="off"
        onChange={(e) => handleInput(e)}
        value={inputValue}
      />

      <Button onClick={(e) => handleSubmit(e)} type="submit">
        Add
      </Button>
    </Form>
  )
}
