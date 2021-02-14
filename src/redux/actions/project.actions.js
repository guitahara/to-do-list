import { projectActionTypes } from '../action-types/index';
import { projectService } from '../../services/index'

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

// function update(registry, from) {
//     function registerRequest() { return { type: userActionTypes.REGISTER_REQUEST } }
//     function registerSuccess() { return { type: userActionTypes.REGISTER_SUCCESS } }
//     function registerError(error) { return { type: userActionTypes.REGISTER_ERROR, error } }
//     return async dispatch => {
//         try {
//             dispatch(registerRequest());
//             await userService.register({
//                 userName: registry.username,
//                 name: registry.name,
//                 password: registry.password
//             })
//             dispatch(registerSuccess());
//             history.push(from);
//         } catch (error) {
//             dispatch(registerError(error));
//         }
//     };
// }


// function remove(registry, from) {
//     function registerRequest() { return { type: userActionTypes.REGISTER_REQUEST } }
//     function registerSuccess() { return { type: userActionTypes.REGISTER_SUCCESS } }
//     function registerError(error) { return { type: userActionTypes.REGISTER_ERROR, error } }
//     return async dispatch => {
//         try {
//             dispatch(registerRequest());
//             await userService.register({
//                 userName: registry.username,
//                 name: registry.name,
//                 password: registry.password
//             })
//             dispatch(registerSuccess());
//             history.push(from);
//         } catch (error) {
//             dispatch(registerError(error));
//         }
//     };
// }

export const projectActions = {
    create,
    // update,
    find,
    // remove
}