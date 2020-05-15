import axios from "axios";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodA";

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
    const token = window.localStorage.getItem("token");
    const config = {
        headers: {
            'auth': token
        }
    }
    try{
        const response = await axios.get(`${baseUrl}/restaurants`,
        config)
        dispatch(setAllRestaurants(response.data.restaurants))
        console.log(response.data.restaurants)
    }catch(error){
        console.log(error)
    }
}

export const getRestaurantDetails = (restaurantId) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const config = {
        headers: {
            'auth': token
        }
    }
    try{
        const response = await axios.get(`${baseUrl}/restaurants/${restaurantId}`,
        config)
        dispatch(setRestaurantDetails(response.data.restaurant))
        console.log(response.data.restaurant)
    }catch (error){
        console.log(error)
    }
}
// Funções dos pedidos
export const createNewOrder = (restaurantId, productArray) => async(dispatch) => {
    const token = window.localStorage.getItem("token");
    const config = {
        headers: {
            'auth':token,
            
        }
    }
    try {
        await axios.post(`${baseUrl}/restaurants/${restaurantId}/order`,
     productArray , config)

      //dispatch(getActiveOrder())
     

    } catch(error) {
     console.log("Pedido não criado")

 }}
export const getActiveOrder = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const config = {
        headers: {
            'auth':token,
           
        }
    }
    try {
        const response = await axios.get (`${baseUrl}/active-order`, config)
        dispatch(setOrders(response.data.order))
    } catch(error) {
        console.log("Pedido não ativo")

    }
}
export const getOrderHistory = () => async(dispatch) => {
    const token = window.localStorage.getItem("token");
    const config = {
        headers: {

            'auth':token,  
        }
    }
    
    try { 
        const response = await axios.get(`${baseUrl}/orders/history`, config)
        dispatch(setOrderHistory(response.data.orders))
        console.log(response.data.orders)

    } catch(error) {
        console.log("Não foi encontrado")

    }
    
}
