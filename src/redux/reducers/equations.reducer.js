// equations reducer
const saveEquations = (state = [], action) => {
    switch(action.type) {
        case 'SAVE_EQUATIONS':
            return action.payload;
        default:
            return state;
    }
}

export default saveEquations;