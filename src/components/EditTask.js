
function EditTask({ task, tasks, setTasks }) {
    
    return (
      <tr>
        <td className="border">{task._id}</td>
        <td>
          <input
            type="text"
            name="text"
            onChange={inputHandler}
            value={task.text}
          />
        </td>
        <td>
          <button type="submit">Update</button>
        </td>
      </tr>
    );
    //functions
    function inputHandler(event) {
      const value = event.target.value;
      const newlist = tasks.map((li) =>
        li._id === task._id ? { ...li, text: value } : li
      );
      setTasks(newlist);
    }
  }

  export default EditTask;