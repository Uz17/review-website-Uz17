import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import img from "../../banner.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='section_header d-flex justify-content-center align-items-center mb-5'>
        <h2 className=''>About Us</h2>
      </div>
      <div>
        <Container>
          <Row>
            <Col className='d-flex align-items-center'>
              <p>
                This is Uzaiz Sumit and I’m the founder of EduVibe. In 2021, I
                published my first online learning platform. My goal is to make
                complex Programming Courses simple and easy to understand. In
                July 2021, I launched EduVibe with the goal of providing an
                immersive learning experience to students all over the world. Be
                Creative, EduVibe!
              </p>
            </Col>
            <Col>
              <img src={img} alt='' />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default About;
