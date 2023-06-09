import { Button } from "../styles/Button.style"
import { TaskWrapper } from "../styles/Task.style"

type Task = {
  id: number
  taskName: string
}

type Props = {
  task: Task
  deleteTask: (taskId: number) => void
}

export default function Task({ task, deleteTask }: Props) {
  return (
    <TaskWrapper>
      <span> {task.taskName} </span>
      <Button onClick={() => deleteTask(task.id)}>delete</Button>
    </TaskWrapper>
  )
}
