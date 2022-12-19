import { useRef } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function AddTask({ setTasks }) {
  const textRef = useRef();

  return (
    <form onSubmit={submitHandler} className="mt-4">
      <InputGroup className="my-3">
        {/* onChange for search */}
        <Form.Control
          type="text"
          name="text"
          placeholder="enter text"
          ref={textRef}
        />

        <Button type="submit">Add</Button>
      </InputGroup>
    </form>
  );
  function submitHandler(e) {
    console.log(e);
    e.preventDefault();
    const _id = Math.floor(Math.random() * 10000) + 1;
    const text = e.target.elements.text.value;
    const newRecord = {
      _id: _id,
      text,
    };
    if (!text) {
      alert('Please add a task');
      return;
    }
    setTasks((prevRecords) => {
      return prevRecords.concat(newRecord);
    });

    textRef.current.value = '';
  }
}

export default AddTask;
