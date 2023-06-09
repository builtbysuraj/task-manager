type Task = {
  id: number
  taskName: string
}

type Props = {
  task: Task
  index: number
  deleteTask: (taskId: number) => void
}

export default function Task({ task, index, deleteTask }: Props) {
  return (
    <div key={index}>
      <span> {task.taskName} </span>
      <button onClick={() => deleteTask(task.id)}>delete</button>
    </div>
  )
}
