import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import {
    Label,
    Input,
    FormGroup,
    Button,
    Card,
    Form
} from 'reactstrap';
import './project-form.css';

function ProjectFormComponent() {
    const [inputs, setInputs] = useState({
        name: '',
    });
    const { name } = inputs;
    // const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch(userActions.register(inputs, from));
    }
    return (
        <Card className='project-form-card'>
            <h2 className='title'>Create New Project</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input placeholder='Project Name' type='text' name='name' value={name} onChange={handleChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Button block color='info align-center'>Create Project</Button>
                </FormGroup>
            </Form>
        </Card>
    );
}

export { ProjectFormComponent };