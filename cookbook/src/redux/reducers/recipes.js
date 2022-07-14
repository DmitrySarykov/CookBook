var initialState = []
function recipes(state = initialState, action){
    switch (action.type){
        case "ADD_RECIPE":
            return [...state, action.payload]
            break;
        case "DELETE_RECIPE":
            return state
            break;
        case "DELETE_RECIPES_ALL":
                return []
                break;
        default:
            return state;
    }
}

export default recipes