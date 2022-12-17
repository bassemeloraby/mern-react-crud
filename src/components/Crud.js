import { useState } from 'react';
import AddList from './AddList';
import EditList from './EditList';

function Crud() {
  const [lists, setList] = useState([
    { id: 1, name: 'hp' },
    { id: 2, name: 'lenovo' },
  ]);
  const [updateState, setUpdateState] = useState(-1);
  return (
    <div className="container">
      <AddList setList={setList} />
      <form onSubmit={handleSubmit}>
        <table className="table  mt-4 border">
          {lists.map((current) =>
            updateState === current.id ? (
              <EditList current={current} lists={lists} setList={setList} />
            ) : (
              <tr className="text-center border">
                <td className="border">{current.id}</td>
                <td className="border">{current.name}</td>
                <td className="border">
                  <button
                    className="edit"
                    onClick={() => handleEdit(current.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    type="button"
                    onClick={() => handleDelete(current.id)}
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
  function handleEdit(id) {
    setUpdateState(id);
  }
  function handleDelete(id) {
    const newList = lists.filter((li)=> li.id !== id)
    setList(newList);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const newlist = lists.map((li) =>
      li.id === updateState ? { ...li, name: name } : li
    );
    setList(newlist);
    setUpdateState(-1);
  }
}

export default Crud;
