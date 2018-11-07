export default function placesReducer(state = [], action) { //state = [1] es el valor inicial de aqui pasara el los mapStatetoProps
    switch (action.type) {
        case 'LOAD_PLACES':
            return action.state
        default:
            return state;
    }
}