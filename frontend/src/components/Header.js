import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="CRUD Django React">React-Bootstrap</Navbar.Brand>
      </Container>
    </Navbar>
  );
}