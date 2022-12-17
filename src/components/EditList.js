
function EditList({ current, lists, setList }) {
    function handInput(event) {
      const value = event.target.value;
      const newlist = lists.map((li) =>
        li.id === current.id ? { ...li, name: value } : li
      );
      setList(newlist);
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