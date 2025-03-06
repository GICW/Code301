import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Gallery of Horns</Navbar.Brand>
      </Navbar>
    </Container>
  );
}

export default Header;
