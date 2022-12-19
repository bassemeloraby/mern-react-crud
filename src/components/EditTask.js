import Button from 'react-bootstrap/Button';

function EditTask({ task, tasks, setTasks }) {
  return (
    <tbody>
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
          <Button variant="success" type="submit">
            Update
          </Button>
        </td>
      </tr>
    </tbody>
  );
  //functions
  function inputHandler(e) {
    const value = e.target.value;
    const updatedTask = tasks.map((li) =>
      li._id === task._id ? { ...li, text: value } : li
    );
    setTasks(updatedTask);
  }
}

export default EditTask;
