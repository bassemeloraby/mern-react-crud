
function EditList({ current, tasks, setTasks }) {
    function handInput(event) {
      const value = event.target.value;
      const newlist = tasks.map((li) =>
        li._id === current._id ? { ...li, text: value } : li
      );
      setTasks(newlist);
    }
    return (
      <tr>
        <td className="border">{current._id}</td>
        <td>
          <input
            type="text"
            name="text"
            onChange={handInput}
            value={current.text}
          />
        </td>
        <td>
          <button type="submit">Update</button>
        </td>
      </tr>
    );
  }

  export default EditList;