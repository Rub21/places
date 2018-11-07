export default function userReducer(state = { name: 'Kiara' }, action) {
    switch (action.type) {
        case 'LOG_IN':
            return { jwt: action.jwt }
        default:
            return state;
    }
}