import { projectActionTypes } from '../action-types/index';
import { projectService, taskService } from '../../services/index'

function create(project) {
    function createRequest() { return { type: projectActionTypes.PROJECT_CREATE_REQUEST } }
    function createSuccess(project) { return { type: projectActionTypes.PROJECT_CREATE_SUCCESS, project } }
    function createError(error) { return { type: projectActionTypes.PROJECT_CREATE_ERROR, error } }
    return async dispatch => {
        try {
            dispatch(createRequest());
            const { data } = await projectService.create({
                name: project.name
            })
            dispatch(createSuccess(data));
        } catch (error) {
            dispatch(createError(error));
        }
    };
}

function find() {
    function findRequest() { return { type: projectActionTypes.PROJECT_FIND_REQUEST } }
    function findSuccess(projects) { return { type: projectActionTypes.PROJECT_FIND_SUCCESS, projects } }
    function findError(error) { return { type: projectActionTypes.PROJECT_FIND_ERROR, error } }
    return async dispatch => {
        try {
            dispatch(findRequest());
            const { data } = await projectService.find()
            dispatch(findSuccess(data));
        } catch (error) {
            dispatch(findError(error));
        }
    };
};

function update(projectId, data) {
    function updateRequest() { return { type: projectActionTypes.PROJECT_UPDATE_REQUEST } }
    function updateSuccess(data) { return { type: projectActionTypes.PROJECT_UPDATE_SUCCESS, data } }
    function updateError(error) { return { type: projectActionTypes.PROJECT_UPDATE_ERROR, error } }
    return async dispatch => {
        try {
            dispatch(updateRequest());
            await projectService.update(projectId, { name: data.projectName })
            dispatch(updateSuccess({ ...data, projectId }));
        } catch (error) {
            dispatch(updateError(error));
        }
    };
}


function remove(projectId) {
    function removeRequest() { return { type: projectActionTypes.PROJECT_REMOVE_REQUEST } }
    function removeSuccess(projectId) { return { type: projectActionTypes.PROJECT_REMOVE_SUCCESS, projectId } }
    function removeError(error) { return { type: projectActionTypes.PROJECT_REMOVE_ERROR, error } }
    return async dispatch => {
        try {
            dispatch(removeRequest());
            await projectService.remove(projectId)
            dispatch(removeSuccess(projectId));
        } catch (error) {
            dispatch(removeError(error));
        }
    };
};

function createTask(projectId, task) {
    function createTaskRequest() { return { type: projectActionTypes.PROJECT_TASK_CREATE_REQUEST } }
    function createTaskSuccess() { return { type: projectActionTypes.PROJECT_TASK_CREATE_SUCCESS } }
    function createTaskError(error) { return { type: projectActionTypes.PROJECT_TASK_CREATE_ERROR, error } }
    function findRequest() { return { type: projectActionTypes.PROJECT_FIND_REQUEST } }
    function findSuccess(projects) { return { type: projectActionTypes.PROJECT_FIND_SUCCESS, projects } }
    return async dispatch => {
        try {
            dispatch(createTaskRequest());
            await taskService.create(projectId, task)
            dispatch(createTaskSuccess());
            dispatch(findRequest());
            const { data } = await projectService.find()
            dispatch(findSuccess(data));
        } catch (error) {
            dispatch(createTaskError(error));
        }
    };
};

export const projectActions = {
    create,
    update,
    find,
    remove,
    createTask
}