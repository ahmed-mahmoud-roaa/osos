import Ui from './Ui'

export default function TaskItem({ taskData, setCurrentPage }) {
  return (
    <>
      <Ui taskData={taskData} setCurrentPage={setCurrentPage} />
    </>
  )
}
