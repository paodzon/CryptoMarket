const INITIAL_STATE = {
    cryptoData: []
}

const cryptoReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'GET_DATA':
            return {...state, cryptoData:action.payload}
        default:
            return state
    }
}

export default cryptoReducer