import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './todo.css';
import {
  NavbarComponent,
  ProjectFormComponent
} from '../../components/index';

function TodoPage() {
  return (
    <section>
      <NavbarComponent />
      <Container fluid className='to-do-container'>
        <Row>
          <Col xs="8"></Col>
          <Col xs="4">
            <ProjectFormComponent />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TodoPage;