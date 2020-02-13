export default (state = {}, action) => {
    switch(action.type){
        case 'FORM_SUBMIT':
            return {
                result: action.payload
            }
        default:
            return state
    }
}