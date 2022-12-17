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
          {tasks.map((current) =>
            updateState === current._id ? (
              <EditList current={current} tasks={tasks} setTasks={setTasks} />
            ) : (
              <tr className="text-center border">
                <td className="border">{current._id}</td>
                <td className="border">{current.name}</td>
                <td className="border">
                  <button
                    className="edit"
                    onClick={() => handleEdit(current._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    type="button"
                    onClick={() => handleDelete(current._id)}
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
    const name = event.target.elements.name.value;
    const newlist = tasks.map((li) =>
      li._id === updateState ? { ...li, name: name } : li
    );
    setTasks(newlist);
    setUpdateState(-1);
  }
}

export default Crud;
