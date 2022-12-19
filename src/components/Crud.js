import { useState } from 'react';
import AddTask from './AddTask';
import EditTask from './EditTask';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Crud() {
  //add useState for Task
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
  //add useState for Task update
  const [updateState, setUpdateState] = useState(-1);
  const [search, setSearch] = useState('');
  
  return (
    <div className="container">
      <AddTask setTasks={setTasks} />
      <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
      <form onSubmit={submitHandler}>
        <table className="table  mt-4 border">
        <thead>
          <tr className="text-center border bg-primary">
            <th className="border">Id</th>
            <th className="border">Task</th>
            <th className="border">Operations</th>
          </tr>
          </thead>
          {tasks.length > 0 ? (
            tasks.map((task) =>
              updateState === task._id ? (
                <EditTask task={task} tasks={tasks} setTasks={setTasks} />
              ) : (
                <tbody>
                <tr className="text-center border">
                  <td className="border">{task._id}</td>
                  <td className="border">{task.text}</td>
                  <td className="border">
                    <button
                      className="edit"
                      onClick={() => editHandler(task._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete"
                      type="button"
                      onClick={() => deleteHandler(task._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                </tbody>
              )
            )
          ) : (
            <tr>
              <td className="text-center">No tasks to show</td>
            </tr>
          )}
        </table>
      </form>
    </div>
  );
  function editHandler(_id) {
    setUpdateState(_id);
  }
  function deleteHandler(_id) {
    const newList = tasks.filter((li) => li._id !== _id);
    setTasks(newList);
  }
  function submitHandler(e) {
    e.preventDefault();
    const text = e.target.elements.text.value;
    const newlist = tasks.map((li) =>
      li._id === updateState ? { ...li, text: text } : li
    );
    setTasks(newlist);
    setUpdateState(-1);
  }
}

export default Crud;
