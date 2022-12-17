import { useRef } from "react";
function AddTask({ setTasks }) {
    const textRef = useRef();
    
    return (
      <form onSubmit={submitHandler}>
        <input type="text" name="text" placeholder="enter text" ref={textRef} />
        <button type="submit">Add</button>
      </form>
    );
    function submitHandler(e) {
      console.log(e)
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

  export default AddTask