import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"
import { Button, Form, FormControl } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">หมวดหมู่สินค้า</Nav.Link>
            <Nav.Link href="#">ร่วมจัดจำหน่าย</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="ค้นหา..." className="me-2" />
            <Button variant="outline-success">ค้นหา</Button>
          </Form>
          <Nav>
            <Nav.Link href="#">TH ▼</Nav.Link>
            <Nav.Link href="#">ผู้ใช้งาน</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;