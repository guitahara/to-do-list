import React, { useState } from 'react';
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

  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });
  const { username, password } = inputs;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ inputs })
  }

  return (
    <section>
      <Jumbotron fluid>
        <Container fluid='sm'>
          <Row>
            <Col sm={{ size: 6, offset: 3 }} md={{ size: 6, offset: 3 }}>
              <Card outline color='secondary' className='login-form-card'>
                <h2 className='title'>Login</h2>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label>Username</Label>
                    <Input type='text' name='username' value={username} onChange={handleChange}></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input type='password' name='password' value={password} onChange={handleChange}></Input>
                  </FormGroup>
                  <FormGroup>
                    <Button color='primary'>Login</Button>
                    <Link to='/register'>Register</Link>
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