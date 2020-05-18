import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { getRestaurantDetails } from "../../actions/feedRestaurants";
//MATERIAL-UI CARD
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


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
                {restaurantDetails.products ? restaurantDetails.products.map(product => {
                    return(
                        <Card 
                        key={product.id}                    
                        >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image={product.photoUrl}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.name} 
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {product.description} 
                                    </Typography>    
                                    <Typography variant="body2" color="textSecondary" component="p">
                                       R${product.price}  
                                    </Typography>                                    
                                </CardContent>
                            </CardActionArea>      
                        </Card>                          
                    )
                }) : <p>O restaurante não tem produtos cadastrados</p>}                                     
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















