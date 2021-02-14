import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsPencil, BsTrash } from "react-icons/bs";
import {
    Navbar,
    NavbarBrand,
    Nav,
    Form,
    Button,
    Input,
    Container,
    InputGroupAddon,
    InputGroup
} from 'reactstrap';
import { projectActions } from '../../redux/actions/index';
import { TaskComponent } from '../index';
import './project-card.css';

function ProjectCardComponent(props) {
    const [taskInputs, setTaskInputs] = useState({
        description: ''
    });
    const [projectInputs, setProjectInputs] = useState({
        projectName: props.project.name
    });
    const [edit, setEdit] = useState(false);
    const { description } = taskInputs;
    const { projectName } = projectInputs;

    const dispatch = useDispatch();

    const handleTaskChange = (event) => {
        const { name, value } = event.target;
        setTaskInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleProjectChange = (event) => {
        const { name, value } = event.target;
        setProjectInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(projectActions.createTask(props.project._id, taskInputs));
    }

    const handleProjectSubmit = (event) => {
        event.preventDefault();
        dispatch(projectActions.update(props.project._id, projectInputs));
        setEdit(!edit);
    }

    const handleRemove = () => {
        dispatch(projectActions.remove(props.project._id));
    }

    const toggleEdit = () => {
        setEdit(!edit);
    }


    return (
        <Container className='project-container-card'>
            <Navbar color="light" light expand="md">
                {
                    edit ? (
                        <Form onSubmit={handleProjectSubmit}>
                            <InputGroup>
                                <Input placeholder='Project' type='text' name='projectName' value={projectName} onChange={handleProjectChange}></Input>
                                <InputGroupAddon addonType="append"><Button color='success'>Add</Button></InputGroupAddon>
                            </InputGroup>
                        </Form>
                    ) :
                        (
                            <NavbarBrand>{props.project.name}</NavbarBrand>
                        )
                }
                <Nav className="ml-auto" navbar>
                    <BsPencil onClick={toggleEdit} />
                    <BsTrash onClick={handleRemove} />
                </Nav>
            </Navbar>
            <div className='to-do'>
                <h3>To Do</h3>
                {
                    props.project.tasks.filter(task => !task.done).map(task => (<TaskComponent task={task} />))
                }

            </div>
            <div className='to-do'>
                <h3>Done</h3>
                {
                    props.project.tasks.filter(task => task.done).map(task => (<TaskComponent task={task} />))
                }
            </div>
            <div className='project-form-div'>
                <hr></hr>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Input placeholder='Task' type='text' name='description' value={description} onChange={handleTaskChange}></Input>
                        <InputGroupAddon addonType="append"><Button color='success'>Add</Button></InputGroupAddon>
                    </InputGroup>
                </Form>
            </div>
        </Container>
    );
}

export { ProjectCardComponent };