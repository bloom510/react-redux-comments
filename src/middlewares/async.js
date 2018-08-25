export default ({ dispatch }) => next => action => {
    //Check to see if the action has a promise in its payload
    //If yes, wait for it to resolve
    //If no, send the action on to the next middleware
    if(!action.payload || !action.payload.then) {
        return next(action);
    }

    //We want to wait for promise to resolve,
    //then create and dispatch a new action with that data
    action.payload.then(function(response) {
        const newAction = { ...action, payload: response }
    });
} 
