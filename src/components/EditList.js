
function EditList({ current, tasks, setTasks }) {
    function handInput(event) {
      const value = event.target.value;
      const newlist = tasks.map((li) =>
        li.id === current.id ? { ...li, name: value } : li
      );
      setTasks(newlist);
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

  export default EditList;