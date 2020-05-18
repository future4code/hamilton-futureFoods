import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { getRestaurantDetails } from "../../actions/feedRestaurants";




class ProductsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }


    handleOnClicBuyProduct = (productId) => {
        console.log("Adicionar ao carrinho o produto")
        localStorage.setItem('productId ', productId)
        this.props.goToCartPage();
    }

    render() {
        const { restaurantDetails } = this.props
        
        return(
            <div>
                {restaurantDetails.products.map(product => {
                    return(
                        <div 
                        key={product.id}                        
                        >
                            <div>
                                <img src={product.photoUrl}/>
                            </div>
                            <div>
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                            </div>                            
                            <div>
                                <button onClick={this.handleOnClicBuyProduct}>Adicionar</button>
                            </div> 
                        </div>  
                    )
                })}                                     
            </div>            
        );
    }
}

const mapStateToProps = (state) => ({   
    restaurantDetails: state.feed.restaurantDetails,
});

const mapDispatchToProps = (dispatch) => ({
    getRestaurantDetails: (restaurantId) => dispatch(getRestaurantDetails(restaurantId)),
    goToRestaurantDetailsPage: () => dispatch(push(routes.restaurantDetails)),
    goToCartPage: () => dispatch(push(routes.cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)















