var initialState = []
function categories(state = initialState, action){
    switch (action.type){
        case "ADD_CATEGORY":
            return [...state, action.payload]
            break;
        case "DELETE_CATEGORY":
            return state
            break;
        default:
            return state;
    }
}

export default categories