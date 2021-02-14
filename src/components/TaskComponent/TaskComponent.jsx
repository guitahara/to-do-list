import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsPencil, BsTrash } from "react-icons/bs";
import {
    Input,
    FormGroup,
    Button,
    Form,
    InputGroupAddon,
    InputGroup,
    Label
} from 'reactstrap';
import { projectActions } from '../../redux/actions/index';
import './task.css';

function TaskComponent(props) {
    const [edit, setEdit] = useState(false);
    const [inputs, setInputs] = useState({
        done: '',
    });
    const [editInputs, setEditInputs] = useState({
        description: props.task.description,
    });
    const { done } = inputs;
    const { description } = editInputs;
    // const dispatch = useDispatch();

    const handleDoneChange = (event) => {
        const { name, value } = event.target;
        setInputs(inputs => inputs.done ? { ...inputs } : ({ ...inputs, [name]: value }));
        // dispatch(projectActions.create(inputs));
    }

    const handleDescriptionChange = (event) => {
        const { name, value } = event.target;
        setEditInputs(inputs => inputs.done ? { ...inputs } : ({ ...inputs, [name]: value }));
        // dispatch(projectActions.create(inputs));
    }

    const toggleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div className='task-div'>
            {
                edit
                    ? (
                        <Form>
                            <InputGroup className='task-input-group'>
                                <Input className='edit-input' placeholder='Task' type='text' name='description' value={description} onChange={handleDescriptionChange}></Input>
                                <InputGroupAddon addonType="append"><Button className='edit-button' color='secondary'>Ok</Button></InputGroupAddon>
                            </InputGroup>
                        </Form>
                    )
                    : (
                        <Form>
                            <FormGroup>
                                <Input type='checkbox' name='done' value={done} onChange={handleDoneChange}></Input>
                                <Label className='task-icon'>{props.task.description}</Label>
                                <BsPencil className='task-icon' onClick={toggleEdit} />
                                <BsTrash className='task-icon' />
                            </FormGroup>
                        </Form>
                    )
            }
        </div>
    );
}

export { TaskComponent };