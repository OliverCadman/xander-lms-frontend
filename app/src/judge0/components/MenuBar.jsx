import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LanguagesDropdown from './LanguagesDropdown';
import ThemeDropdown from './ThemeDropdown';
import Button from 'react-bootstrap/Button';



// const onSelectChange = (sl) => {
//   console.log("selected Option...", sl);
//   setLanguage(sl);
// };

function MenuBarComp() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src="../src../icons/xander_logo_svg" width="30" height="30" className="d-inline-block align-top" />
            Xander IDE
          </Navbar.Brand>
          <Navbar.Brand href="#">
            Programming languages
          </Navbar.Brand>
          <Navbar.Brand href="#">
            <LanguagesDropdown/>
          </Navbar.Brand>
          <Navbar.Brand href="#">
            IDE Theme
          </Navbar.Brand>
          <Navbar.Brand href="#">
            <ThemeDropdown/>
          </Navbar.Brand>       
          <Navbar.Brand href="#">
          <Button variant="secondary">logout</Button>{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br/>
    </>
  );
}

export default MenuBarComp;