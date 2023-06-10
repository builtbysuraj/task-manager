import { useState } from "react"

import { ButtonSecondary, ButtonWrapper } from "../styles/Button.style"
import { Input } from "../styles/Input.style"
import { TaskWrapper } from "../styles/Task.style"

type Task = {
  id: number
  taskName: string
}

// define type of props
type Props = {
  task: Task
  deleteTask: (taskId: number) => void
  updateTask: (taskId: number, newTaskName: string) => void
}

export default function Task({ task, deleteTask, updateTask }: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [newTaskName, setNewTaskName] = useState<string>(task.taskName)

  // change state on click of edit button
  const handleEdit = () => {
    setIsEditing(true)
  }

  // update the task on click of save button
  const handleSave = () => {
    updateTask(task.id, newTaskName)
    setIsEditing(false)
  }

  return (
    <TaskWrapper>
      {isEditing ? (
        <Input
          spellCheck="false"
          type="text"
          autoComplete="false"
          autoFocus
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
      ) : (
        <span> {task.taskName} </span>
      )}
      <ButtonWrapper>
        <ButtonSecondary del="true" onClick={() => deleteTask(task.id)}>
          delete
        </ButtonSecondary>

        {isEditing ? (
          <ButtonSecondary onClick={handleSave}>save</ButtonSecondary>
        ) : (
          <ButtonSecondary onClick={handleEdit}>edit</ButtonSecondary>
        )}
      </ButtonWrapper>
    </TaskWrapper>
  )
}
