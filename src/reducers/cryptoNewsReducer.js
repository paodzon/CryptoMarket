const INITIAL_STATE = {
    news: []
}

const cryptoNewsReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'GET_NEWS':
            return {...state, news:action.payload}
        default:
            return state
    }
}

export default cryptoNewsReducer

