import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import styled from "styled-components";
import { getAllRestaurants, getRestaurantsDetails } from "../../actions/feedRestaurants";

class RestaurantsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            allRestaurantsList: [],
        };
    }

    componentDidMount(){
        const token = window.localStorage.getItem("token")
        if (token === null) {
          this.props.goToLoginPage()
        }
    
        this.props.getAllRestaurants()
    }


    handleOnClickRestaurantsDetails = (restaurantId) => {
        console.log(restaurantId)
        this.props.getRestaurantsDetails(restaurantId);
        localStorage.setItem('RestaurantId ', restaurantId)
        //this.props.goToRestaurantsDetailsPage();
    }

    render() {
        const { allRestaurants } = this.props

        return(
            <Fragment>

            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    allRestaurants: state.restaurants.allRestaurants.restaurant,
});

const mapDispatchToProps = (dispatch) => ({
    goToLoginPage: () => dispatch(push(routes.root)),
    getAllRestaurants: () => dispatch(getAllRestaurants()),
    getRestaurantsDetails: (restaurantId) => dispatch(getrestaurantsDetails(restaurantId)),
    //goToRestaurantDetailsPage: () => dispatch(push(routes.restaurantDetails)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList)














