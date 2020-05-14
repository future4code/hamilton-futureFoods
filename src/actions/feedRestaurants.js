import axios from "axios";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodA";
const token = window.localStorage.getItem("token");


//FUNÇÕES SINCRONAS

export const setAllRestaurants = (allRestaurants) => ({
    type: 'SET_ALL_RESTAURANTS',
    payload: {
        allRestaurants,
    }
})


export const setRestaurantsDetails = (restaurantsDetails) => ({
    type: 'SET_RESTAURANTS_DETAILS',
    payload: {
        restaurantsDetails,
    }
})
export const setOrders = (order) => ({
    type: 'SET_ORDER',
    payload: {
        order,
    }
})
export const setOrderHistory = (orderHistory) => ({
    type: 'SET_ORDER_HISTORY',
    payload: {
        orderHistory,
    }
})

//FUNÇÕES ASSINCRONAS

export const getAllRestaurants = () => async (dispatch) => {
    const config = {
        headers: {
            'auth': token
        }
    }
    try{
        const response = await axios.get(`${baseUrl}/restaurants`,
        config)
        dispatch(setAllRestaurants(response.data))
    }catch(error){
        console.log(error)
    }
}

export const getRestaurantsDetails = (restaurantId) => async (dispatch) => {
    const config = {
        headers: {
            'auth': token
        }
    }
    try{
        const response = await axios.get(`${baseUrl}/restaurants/${restaurantId}`,
        config)
        dispatch(setRestaurantsDetails(response.data.restaurant))
    }catch (error){
        console.log(error)
    }
}
// Funções dos pedidos
export const createNewOrder = (restaurantId, productArray) => async(dispatch) => {
    const config = {
        headers: {
            'auth':token,
            
        }
    }
    await axios.post(`${baseUrl}/restaurants/${restaurantId}/order`,
     productArray , config)

    try {
      //dispatch(getActiveOrder())
     

    } catch(error) {
     console.log("Pedido não criado")

 }}
export const getActiveOrder = () => async (dispatch) => {
    const config = {
        headers: {
            'auth':token,
           
        }
    }
    const response = await axios.get (`${baseUrl}/active-order`, config)

    try {
        dispatch(setOrders(response.data.order))
    } catch(error) {
        console.log("Pedido não ativo")

    }
}
export const getOrderHistory = () => async(dispatch) => {
    const config = {
        headers: {
            'auth':token,
           
        }
    }
    const response = await axios.get(`${baseUrl}/orders/history`, config)
    try { 
        dispatch(setOrderHistory(response.data.orders))

    } catch(error) {
        console.log("Não foi encontra")

    }
    
}