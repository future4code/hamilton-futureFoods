import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { getAllRestaurants, getRestaurantDetails } from "../../actions/feedRestaurants";




class RestaurantsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }


    handleOnClicBuyProducts = (productId) => {
        console.log("Adicionar ao carrinho o produto")
        localStorage.setItem('productId ', productId)
        this.props.goToCartPage();
    }

    render() {
        const { restaurantDetails } = this.props
        
        return(
            <Fragment>
                {restaurantDetails.map(products => {
                 return(
                    <div>
                        <div 
                        key={products.id}
                        >
                            <div>
                                <img src={products.photoUrl}/>
                            </div>
                            <div>
                                <p>{products.name}</p>
                                <p>{products.description}</p>
                                <p>{products.price}</p>
                            </div>                            
                            <div>
                                <button onClick={handleOnClicBuyProducts}>Adicionar</button>
                            </div>                            
                        </div>
                    </div>                                            
                )})}
            </Fragment>            
        )
    }
}

const mapStateToProps = (state) => ({
    allRestaurants: state.feed.allRestaurants,
    restaurantDetails: state.feed.restaurantDetails,
});

const mapDispatchToProps = (dispatch) => ({
    getAllRestaurants: () => dispatch(getAllRestaurants()),
    getRestaurantDetails: (restaurantId) => dispatch(getrestaurantDetails(restaurantId)),
    //goToRestaurantDetailsPage: () => dispatch(push(routes.restaurantDetails)),
    //goToCartPage: () => dispatch(routes.cart),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList)















