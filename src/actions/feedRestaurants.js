import axios from "axios";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodA";
const token = window.localsotrage.getItem("token");


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


//FUNÇÕES ASSINCRONAS

export const getAllRestaurants = () => (dispatch) => {
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



