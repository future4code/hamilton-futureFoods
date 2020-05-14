const initialState = {
    allRestaurants: [],
    selectedRestaurantId: "",
    restaurantDetails: {},
    order:[],
    orderHistory:[]


const feed = (state = initialState, action) => {
        switch(action.type) {
        case 'SET_ALL_RESTAURANTS':
            const restaurantList = action.payload.allRestaurants;
            return {...state, allRestaurants: restaurantList};
        case 'SET_RESTAURANTS_DETAILS':
            const restaurantsDetails = action.payload.restaurantsDetails;
            return {...state, restaurantsDetails: restaurantsDetails};
        case 'SET_ORDER':
            const order = action.payload.order;
            return {...state, order:order};
        case 'SET_ORDER_HISTORY':
            const orderHistory = action.payload.order;
            return {...state, orderHistory:orderHistory};     
        default:
            return state;
    }
}

export default feed;

