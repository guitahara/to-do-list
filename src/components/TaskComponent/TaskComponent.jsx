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
    Label,
    Tooltip
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
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);
    const { done } = inputs;
    const { description } = editInputs;
    const dispatch = useDispatch();

    const handleDoneChange = (event) => {
        const { name, value } = event.target;
        setInputs(inputs => inputs.done ? { ...inputs } : ({ ...inputs, [name]: value }));
        dispatch(projectActions.updateTask(
            props.projectId,
            props.task._id,
            { done: true }
        ));
    }

    const handleDescriptionSubmit = (event) => {
        event.preventDefault();
        dispatch(projectActions.updateTask(
            props.projectId,
            props.task._id,
            { ...editInputs }
        ));
        toggleEdit();
    }

    const handleRemove = () => {
        dispatch(projectActions.removeTask(
            props.projectId,
            props.task._id
        ));
    }

    const handleDescriptionChange = (event) => {
        const { name, value } = event.target;
        setEditInputs(inputs => inputs.done ? { ...inputs } : ({ ...inputs, [name]: value }));
    }

    const toggleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div className='task-div'>
            {
                edit
                    ? (
                        <Form onSubmit={handleDescriptionSubmit}>
                            <InputGroup className='task-input-group'>
                                <Input className='edit-input' placeholder='Task' type='text' name='description' value={description} onChange={handleDescriptionChange}></Input>
                                <InputGroupAddon addonType="append"><Button className='edit-button' color='secondary'>Ok</Button></InputGroupAddon>
                            </InputGroup>
                        </Form>
                    )
                    : (
                        <Form>
                            <FormGroup className='task-form-group'>
                                {props.task.done ? null : <Input type='checkbox' name='done' value={done} onChange={handleDoneChange}></Input>}
                                <Label className='task-icon' id={`task-id-${props.task._id}`}>{props.task.description}</Label>
                                {
                                    done
                                        ? null
                                        : (<Tooltip placement="right" isOpen={tooltipOpen} target={`task-id-${props.task._id}`} toggle={toggle}>
                                            {new Date(props.task.finishDate).toLocaleDateString()}
                                        </Tooltip>)
                                }
                                {props.task.done ? null : <BsPencil className='task-icon' onClick={toggleEdit} />}
                                {props.task.done ? null : <BsTrash className='task-icon' onClick={handleRemove} />}
                            </FormGroup>
                        </Form>
                    )
            }
        </div>
    );
}

export { TaskComponent };