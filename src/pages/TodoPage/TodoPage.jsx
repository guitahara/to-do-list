import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import './todo.css';
import {
  NavbarComponent,
  ProjectFormComponent,
  ProjectCardComponent
} from '../../components/index';
import { projectActions } from '../../redux/actions/index'

function TodoPage() {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(projectActions.find());
  }, []);

  const projects = useSelector(state => (
    state.projectReducer.projects
  ), shallowEqual);

  return (
    <section>
      <NavbarComponent />
      <Container fluid className='to-do-container'>
        <Row>
          <Col xs="8">
            <Row>
              {projects.map(project => (
                <ProjectCardComponent project={project} key={`project-${project._id}`} />
              ))}
            </Row>
          </Col>
          <Col xs="4">
            <ProjectFormComponent />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TodoPage;