

const user = (state = {}, action) => { 
    switch(action.type){ case "LOGIN_USER": 
        return {...state, allLogin: action.payload.login} 
    default: return state 
}} 
    export default user; 
