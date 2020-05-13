const initialState = {
    allRestaurants: [],
    selectedRestaurantId: "",
    restaurantDetails: {},
}

const feed = (state = initialState, action) => {
    console.log(action.payload)
    switch(action.type) {
        case 'SET_ALL_RESTAURANTS':
            const restaurantList = action.payload.allRestaurants;
            return {...state, allRestaurants: restaurantList};
        case 'SET_RESTAURANTS_DETAILS':
            const restaurantsDetails = action.Payload.restaurantsDetails;
            return {...state, restaurantsDetails: restaurantsDetails};
        default:
            return state;
    }
}

export default feed;