import React from "react";
import "./App.css";
import FormComponent from "./components/Form";
import Uyeler from "./components/Uyeler";
import { Container, Row, Col } from "reactstrap";

const uyeKisi = [
  {
    name: "John",
    surname: "Doe",
    email: "john@example.com",
    role: "Back-End-Developer",
  },
  {
    name: "Sarah",
    surname: "Swan",
    email: "sarahs@example.com",
    role: "Front-End-Developer",
  },
  {
    name: "Lucy",
    surname: "Trump",
    email: "lucyt@example.com",
    role: "Graphic Designer",
  },
];

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs="6">
            <FormComponent />
          </Col>
          <Col xs="6">
            <Uyeler uyeKisi={uyeKisi} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
