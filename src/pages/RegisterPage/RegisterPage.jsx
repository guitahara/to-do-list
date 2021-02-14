import React, { useState } from 'react';
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
import './register.css';

function RegisterPage() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    name: ''
  });
  const { username, password, name } = inputs;

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
                <h2 className='title'>Register</h2>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label>Name</Label>
                    <Input type='text' name='name' value={name} onChange={handleChange}></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>Username</Label>
                    <Input type='text' name='username' value={username} onChange={handleChange}></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input type='password' name='password' value={password} onChange={handleChange}></Input>
                  </FormGroup>
                  <FormGroup>
                    <Button color='primary'>Register</Button>
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

export default RegisterPage;