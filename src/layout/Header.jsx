import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="custom-navbar py-2">
      <Container className="d-flex justify-content-between">
        {/* Brand Name */}
        <Navbar.Brand href="#" className="brand-text">
          Fruit <span className="text-highlight">For You</span>
        </Navbar.Brand>

        {/* Centered Navigation Links */}
        <Nav className="mx-auto">
          <Nav.Link href="#">หมวดหมู่ผลไม้</Nav.Link>
          <Nav.Link href="#">ร่วมธุรกิจกับเรา</Nav.Link>
        </Nav>

        {/* Icons & User Options */}
        <Nav className="d-flex align-items-center">
          <Nav.Link href="#" className="icon-link">
            <NotificationsNoneIcon fontSize="medium" />
          </Nav.Link>
          <Nav.Link href="#" className="icon-link">
            <ShoppingCartOutlinedIcon fontSize="medium" />
          </Nav.Link>
          {/* Language Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-lang" className="dropdown-toggle-custom">
              TH 
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">EN</Dropdown.Item>
              <Dropdown.Item href="#">TH</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="#">เข้าสู่ระบบ</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
