import { useState } from 'react';

function Crud() {
  
  const [lists, setList] = useState([
    { id: 1, name: 'hp' },
    { id: 2, name: 'lenovo' },
  ]);
  return (
    <div className="container">
    <AddList/>
     <table className="table  mt-4 border">
     {lists.map((current)=>(
        <tr className='text-center border'>
        <td className='border'>{current.id}</td>
        <td className='border'>{current.name}</td>
        <td className='border'>
        <button className='edit'>Edit</button>
        <button className='delete'>Delete</button>
        </td>
        </tr>
     ))}
     </table>
    </div>
  );
}

function AddList () {
 return(
    <form>
        <input type="text" name='name' placeholder='enter name'/>
        <button type='submit'>Add</button>
    </form>
 )   
}
export default Crud;
