import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { getRestaurantDetails } from "../../actions/feedRestaurants";
import styled from "styled-components";
//MATERIAL-UI CARD
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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
                        <CardContainer>
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
                                <Button variant="contained"
                                onClick={this.handleOnClicBuyProduct}
                                >
                                    Adicionar
                                </Button>      
                            </Card> 
                        </CardContainer>
                                                
                    )
                }) : <p>Carregando os produtos :)</p>}                                     
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

const CardContainer = styled.div`
    margin: 15px 16px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
`













