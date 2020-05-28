import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import {  } from "../../actions/feedRestaurants";




class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }


    handleOnClick = (productId) => { }


    render() {
        const {  } = this.props
        
        return(
            <div>
                <p>FAZER O CARRINHO AQUI :)</p>
            </div>
        )
    
    }
}

const mapStateToProps = (state) => ({
   // allRestaurants: state.feed.allRestaurants,
    //restaurantDetails: state.feed.restaurantDetails,
});

const mapDispatchToProps = (dispatch) => ({
    //getAllRestaurants: () => dispatch(getAllRestaurants()),
    //getRestaurantDetails: (restaurantId) => dispatch(getrestaurantDetails(restaurantId)),
    //goToRestaurantDetailsPage: () => dispatch(push(routes.restaurantDetails)),
    //goToCartPage: () => dispatch(routes.cart),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)















