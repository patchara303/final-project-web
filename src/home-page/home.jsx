import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import "./home.css";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <Container>
          <div className="hero-banner">
            <h1>ยินดีต้อนรับ!</h1>
            <p>ค้นหาสินค้าหลากหลายหมวดหมู่ได้ที่นี่</p>
            <Button variant="primary">เริ่มต้นเลย</Button>
          </div>
        </Container>
      </section>

      {/* Product Category Carousel */}
      <section className="category-section">
        <Container>
          <h2>หมวดหมู่สินค้า</h2>
          <Carousel indicators={false}>
            <Carousel.Item>
              <Row>
                <Col md={3}>
                  <Card className="category-card">
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                      <Card.Title>หมวดหมู่ 1</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="category-card">
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                      <Card.Title>หมวดหมู่ 2</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="category-card">
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                      <Card.Title>หมวดหมู่ 3</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="category-card">
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                      <Card.Title>หมวดหมู่ 4</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* Popular Products */}
      <section className="popular-products">
        <Container>
          <h2>ผลไม้ทั้งหมด</h2>
          <Row>
            <Col md={2}>
              <Card className="product-card">
                <Card.Img variant="top" src="https://via.placeholder.com/100" />
                <Card.Body>
                  <Card.Title>สินค้า 1</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2}>
              <Card className="product-card">
                <Card.Img variant="top" src="https://via.placeholder.com/100" />
                <Card.Body>
                  <Card.Title>สินค้า 2</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2}>
              <Card className="product-card">
                <Card.Img variant="top" src="https://via.placeholder.com/100" />
                <Card.Body>
                  <Card.Title>สินค้า 3</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2}>
              <Card className="product-card">
                <Card.Img variant="top" src="https://via.placeholder.com/100" />
                <Card.Body>
                  <Card.Title>สินค้า 4</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2}>
              <Card className="product-card">
                <Card.Img variant="top" src="https://via.placeholder.com/100" />
                <Card.Body>
                  <Card.Title>สินค้า 5</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row>
            <Col className="text-center">
              <p>abc.com | ติดต่อเรา | เกี่ยวกับเรา | 📞 02000000 | 🌐</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
