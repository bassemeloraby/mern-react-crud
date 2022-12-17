import { useRef } from "react";
function AddList({ setTasks }) {
    const textRef = useRef();
    
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="enter text" ref={textRef} />
        <button type="submit">Add</button>
      </form>
    );
    function handleSubmit(event) {
      event.preventDefault();
      const _id = Math.floor(Math.random() * 10000) + 1;
      const text = event.target.elements.text.value;
      const newlist = {
        _id: _id,
        text,
      };
      setTasks((prevList) => {
        return prevList.concat(newlist);
      });
      textRef.current.value = '';
    }
  }

  export default AddList