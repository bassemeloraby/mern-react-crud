import { useRef, useState } from 'react';

function Crud() {
  const [lists, setList] = useState([
    { id: 1, name: 'hp' },
    { id: 2, name: 'lenovo' },
  ]);
  const [updateState, setUpdateState] = useState(-1);
  return (
    <div className="container">
      <AddList setList={setList} />
      <form >
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
                    onClick={() => handleSubmit(current.id)}
                  >
                    Edit
                  </button>
                  <button className="delete">Delete</button>
                </td>
              </tr>
            )
          )}
        </table>
      </form>
    </div>
  );
  function handleSubmit(id) {
    setUpdateState(id);
  }
}
//edit
function EditList({ current, lists, setList }) {
  function handInput() {
    const name = current.target.name;
    const value = name.value;
   const newlist= lists.map((li) => (li.id === current.id ? { ...li, name: value } : li))
   setList(newlist)
  }
  return (
    <tr>
      <td className="border">{current.id}</td>
      <td>
        <input
          type="text"
          name="name"
          onChange={handInput}
          value={current.name}
        />
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
}
//add
function AddList({ setList }) {
  const nameRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const id = Math.floor(Math.random() * 10000) + 1;
    const name = event.target.elements.name.value;
    const newlist = {
      id: id,
      name,
    };
    setList((prevList) => {
      return prevList.concat(newlist);
    });
    nameRef.current.value = '';
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="enter name" ref={nameRef} />
      <button type="submit">Add</button>
    </form>
  );
}
export default Crud;
