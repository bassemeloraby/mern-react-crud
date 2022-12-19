
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchTask({setSearch}) {
    
  return (
    <Form>
        <InputGroup className="my-3">
          {/* onChange for search */}
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search contacts"
          />
        </InputGroup>
      </Form>
  )
}

export default SearchTask