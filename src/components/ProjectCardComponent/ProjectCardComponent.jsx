import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsPencil, BsTrash } from "react-icons/bs";
import {
    Navbar,
    NavbarBrand,
    Nav,
    Form,
    FormGroup,
    Button,
    Input,
    Container,
    InputGroupAddon,
    InputGroup
} from 'reactstrap';
// import { projectActions } from '../../redux/actions/index';
import './project-card.css';

function ProjectCardComponent() {
    const [inputs, setInputs] = useState({
        description: '',
    });
    const { description } = inputs;
    // const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleSubmit = (event) => {
        // event.preventDefault();
        // dispatch(projectActions.create(inputs));
    }

    return (
        <Container className='project-container-card'>
            <Navbar color="light" light expand="md">
                <NavbarBrand>Project Name</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <BsPencil />
                    <BsTrash />
                </Nav>
            </Navbar>
            <div className='to-do'>
                <h3>To Do:</h3>
            </div>
            <div className='to-do'>
                <h3>Done:</h3>
            </div>
            <div className='project-form-div'>
                <hr></hr>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Input placeholder='Task' type='text' name='description' value={description} onChange={handleChange}></Input>
                        <InputGroupAddon addonType="append"><Button color='success'>Add</Button></InputGroupAddon>
                    </InputGroup>
                </Form>
            </div>
        </Container>
    );
}

export { ProjectCardComponent };