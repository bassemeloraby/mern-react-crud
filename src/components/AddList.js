import { useRef } from "react";
function AddList({ setList }) {
    const nameRef = useRef();
    function handleSubmit(event) {
      event.preventDefault();
      const id = Math.floor(Math.random() * 10000) + 1;
      const name = event.target.elements.name.value;
      const newlist = {
        id: id,
        name,
      };
      setList((prevList) => {
        return prevList.concat(newlist);
      });
      nameRef.current.value = '';
    }
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="enter name" ref={nameRef} />
        <button type="submit">Add</button>
      </form>
    );
  }

  export default AddList