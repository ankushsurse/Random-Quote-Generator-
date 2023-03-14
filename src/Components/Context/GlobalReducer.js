const GlobalReducer = ((state, action) => {
    switch (action.type) {
        default:
        case "GET_QUOTE":
            return {
                ...state,
                quote: action.payload
            }

          
    }
})

export default GlobalReducer