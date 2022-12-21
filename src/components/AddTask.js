import { useRef } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function AddTask({ setTasks,tasks }) {
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
    // 
    
    const text = e.target.elements.text.value;
    const newRecord = {
      
      text,
    };
    if (!text) {
      alert('Please add a task');
      return;
    }
    // setTasks((prevRecords) => {
    //   return prevRecords.concat(newRecord);
    // });

    textRef.current.value = '';
    const postData = ()=>{
      axios.post(`http://localhost:5000/tasks`,newRecord)
      
    }
    postData();
    
  }
  
}

export default AddTask;
