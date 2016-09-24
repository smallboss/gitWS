const middleware = store => next => action => {
    if (action.type !== 'PROMISE') {
        return next(action);
    }

    console.log('START >', store.getState());

    const [startAction, successAction, errorAction] = action.actions;

    store.dispatch({
        type: startAction
    });
    action.promise.then( (data) => store.dispatch({
        type: successAction,
        data
    }), (error) => store.dispatch({
        type: errorAction,
        error
    }));

    console.log('END >', store.getState());
}

export default middleware;