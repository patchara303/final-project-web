import React from "react";
import { Container, Row, Col, Card, Button, FormControl, Carousel } from "react-bootstrap";
import "./home.css";

function Home() {
  return (
    <div className="home-page">
      {/* Search Bar */}
      <section className="search-bar">
        <Container>
          <FormControl type="search" placeholder="ค้นหา" className="search-input" />
        </Container>
      </section>

      {/* Hero Section with Single Image */}
      <section className="hero">
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 hero-img"
                src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4q=tbn:ANd9GcRR3hizBuSvPUyEHHLmOX0qX7Ha3JKHjYsUbw&s"
                alt="Fruit Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 hero-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpX1Ut5eFtME_JjgpQhH89wDito-zZiVo4Kw&s"
                alt="Fruit Slide 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 hero-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DzlMBv8kuTU-EcJjMNFn9UewwFK7YEb95A&s"
                alt="Fruit Slide 3"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* Seasonal Fruits */}
      <section className="seasonal-fruits">
        <Container>
          <h2>ผลไม้ตามฤดูกาล</h2>
          <Row className="horizontal-scroll">
            {[...Array(6)].map((_, index) => (
              <Col key={index} md={2} sm={4} xs={6}>
                <Card className="fruit-card">
                  <Card.Img variant="top" src="https://freshsensations.com.au/cdn/shop/products/FruitBox.png?v=1643769480" />
                  <Card.Body>
                    <Card.Title>ผลไม้ตามฤดูกาล</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Popular Fruits */}
      <section className="popular-fruits">
        <Container>
          <h2>ผลไม้ในฤดูกาล</h2>
          <Row>
            {[...Array(6)].map((_, index) => (
              <Col key={index} md={2} sm={4} xs={6}>
                <Card className="fruit-card">
                  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAZpI4QfsDFdLivZpyqsdKn0j0Y7FiLcuSA&s" />
                  <Card.Body>
                    <Card.Title>ลิ้นจี่</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="see-all-btn">
            <Button variant="success">ดูทั้งหมด</Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row>
            <Col md={4} className="footer-brand">
              <h4>Fruit For You</h4>
              <p>Follow Us On Social</p>
              <div className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </Col>
            <Col md={4} className="footer-links">
              <h5>Help?</h5>
              <p>ประวัติการซื้อ</p>
              <p>FAQ</p>
              <p>เกี่ยวกับเรา</p>
            </Col>
            <Col md={4} className="footer-contact">
              <h5>Contact</h5>
              <p>📞 0683951232</p>
              <p>📘 Fruitforyou.official</p>
              <p>ให้บริการตั้งแต่เวลา 10.00 - 18.00 น.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
