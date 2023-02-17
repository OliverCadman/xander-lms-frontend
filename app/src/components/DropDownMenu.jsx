import Dropdown from 'react-bootstrap/Dropdown';

function DropDownMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Select a topic to learn  
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Javacript</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Python</Dropdown.Item>
        <Dropdown.Item href="#/action-3">SQL</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Quantexa</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
};

export default DropDownMenu
