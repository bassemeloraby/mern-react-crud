import { useState, useEffect } from 'react';
import axios from 'axios';
import AddTask from './AddTask';
import EditTask from './EditTask';

import SearchTask from './SearchTask';
import Button from 'react-bootstrap/Button';

function Crud() {
  //fetch of data with axios
  useEffect(() => {
    axios.get(`http://localhost:5000/tasks`).then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }, []);

  //add useState for Task
  const [tasks, setTasks] = useState([]);
  //add useState for Task update
  const [updateState, setUpdateState] = useState(-1);
  const [search, setSearch] = useState('');
  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  };

  return (
    <div className="container">
      <AddTask onAdd={addTask} />
      <SearchTask setSearch={setSearch} />
      <form onSubmit={submitHandler}>
        <table className="table  mt-4 border">
          <thead>
            <tr className="text-center border bg-primary">
              <th className="border">Task</th>
              <th className="border">time added</th>
              <th className="border">Operations</th>
            </tr>
          </thead>
          {tasks.length > 0 ? (
            tasks
              .filter((task) => {
                return search.toLowerCase() === ''
                  ? task
                  : task.text.toLowerCase().includes(search);
              })
              .map((task) =>
                updateState === task._id ? (
                  <EditTask
                    key={task._id}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                    updateBack={task._id}
                  />
                ) : (
                  <tbody key={task._id}>
                    <tr className="text-center border">
                      <td className="border">{task.text}</td>
                      <td className="border">{task.createdAt}</td>
                      <td className="border">
                        <Button
                          className="edit"
                          onClick={() => editHandler(task._id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="delete"
                          type="button"
                          onClick={() => deleteHandler(task._id)}
                        >
                          Delete
                        </Button>
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
    console.log(_id)
  }
  function deleteHandler(_id) {
    axios.delete(`http://localhost:5000/tasks/${_id}`);
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
