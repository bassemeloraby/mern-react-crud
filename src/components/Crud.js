import { useState } from 'react';
import AddList from './AddList';
import EditList from './EditList';

function Crud() {
  const [tasks, setTasks] = useState([
    {
      _id: 1,
      text: 'bassem',
    },
    {
      _id: 2,
      text: 'omar',
    },
    {
      _id: 3,
      text: 'soliman',
    },
  ]);
  const [updateState, setUpdateState] = useState(-1);
  return (
    <div className="container">
      <AddList setTasks={setTasks} />
      <form onSubmit={handleSubmit}>
        <table className="table  mt-4 border">
          {tasks.map((task) =>
            updateState === task._id ? (
              <EditList task={task} tasks={tasks} setTasks={setTasks} />
            ) : (
              <tr className="text-center border">
                <td className="border">{task._id}</td>
                <td className="border">{task.text}</td>
                <td className="border">
                  <button
                    className="edit"
                    onClick={() => handleEdit(task._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    type="button"
                    onClick={() => handleDelete(task._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </table>
      </form>
    </div>
  );
  function handleEdit(_id) {
    setUpdateState(_id);
  }
  function handleDelete(_id) {
    const newList = tasks.filter((li) => li._id !== _id);
    setTasks(newList);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const text = event.target.elements.text.value;
    const newlist = tasks.map((li) =>
      li._id === updateState ? { ...li, text: text } : li
    );
    setTasks(newlist);
    setUpdateState(-1);
  }
}

export default Crud;
