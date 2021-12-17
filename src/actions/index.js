import cryptoApi from "../services/cryptoApi";
import cryptoNewsApi from "../services/cryptoNewsApi";
 
export const getCryptos = () => async(dispatch) =>{
    const response = await cryptoApi.get('/coins');
    dispatch({
        type:"GET_CRYPTOS",
        payload: response.data.data
    })
}

export const getCrypto = (id) => async(dispatch) =>{

    const response = await cryptoApi.get(`/coin/${id}`)

    dispatch({
        type:'GET_CRYPTO',
        payload: response.data.data
    })
}

export const clearCrypto = () =>{
    return({
        type:'CLEAR_CRYPTO'
    })
}
export const getExchanges = () => async(dispatch) =>{
    const response = await cryptoApi.get('/exchanges');

    dispatch({
        type:"GET_EXCHANGES",
        payload:response.data.data
    })
}


export const getNews = () => async(dispatch) =>{
    const response = await cryptoNewsApi.get('/search',{
        params:{
            q: 'cryptocurrency news',
            count: '50'
        }
    })

    dispatch({
        type:'GET_NEWS',
        payload: response.data.value
    })

}
