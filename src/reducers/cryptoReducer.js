const INITIAL_STATE = {
    cryptoData: [],
    exchanges:[],
    cryptoDetails: {coin:[]}
}

const cryptoReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'GET_CRYPTOS':
            return {...state, cryptoData:action.payload}
        case 'GET_EXCHANGES':
            return {...state, exchanges:action.payload}
        case 'GET_CRYPTO':
            return {...state, cryptoDetails: action.payload}
        case 'CLEAR_CRYPTO':
            return {...state, cryptoDetails: {}}
        default:
            return state
    }
}

export default cryptoReducer