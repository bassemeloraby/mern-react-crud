import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function AddTask({ onAdd }) {
  
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    onAdd({ text });

    setText('');
  };
  return (
    <form  onSubmit={onSubmit} className="mt-4">
      <InputGroup className="my-3">
        {/* onChange for search */}
        <Form.Control
          type="text"
          name="text"
          placeholder="enter text"
          onChange={(e) => setText(e.target.value)}
        />

        <Button type="submit" value="Save Task">Add</Button>
      </InputGroup>
    </form>
  );
}

export default AddTask;
