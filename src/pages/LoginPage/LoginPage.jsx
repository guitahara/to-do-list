import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Label,
  Input,
  FormGroup,
  Button,
  Row,
  Col,
  Jumbotron,
  Card,
  Form
} from 'reactstrap';
import './login.css';

function LoginPage() {
  return (
    <section>
      <Jumbotron fluid>
        <Container fluid='sm'>
          <Row>
            <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
              <Card outline color='secondary' className='login-form-card'>
                <h2 className='title'>Login</h2>
                <Form>
                  <FormGroup>
                    <Label>Username</Label>
                    <Input type='text' name='username'></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input type='password' name='password'></Input>
                  </FormGroup>
                  <FormGroup>
                    <Button color='primary'>Login</Button>
                    <Link to='/register'>Registrar</Link>
                  </FormGroup>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </section>
  );
}

export default LoginPage;