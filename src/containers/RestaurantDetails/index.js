import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { getAllRestaurants, getRestaurantDetails } from "../../actions/feedRestaurants";

//MATERIAL-UI CARD
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


class RestaurantDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }


    handleOnClickRestaurantDetails = (restaurantId) => {
        console.log("O produto foi clicado")

        this.props.getRestaurantsDetails(restaurantId);
        //localStorage.setItem('RestaurantId ', restaurantId)
        //this.props.goToRestaurantsDetailsPage();
    }

    render() {
        const { restaurantDetails, allRestaurants} = this.props
        
        return(
            <Fragment>
                <TitleContainer>
                    <Title>Restaurante</Title> 
                </TitleContainer>

                    <Card 
                    key={restaurant.id}
                    onClick={this.handleOnClickRestaurantsDetails}
                    >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Hamburguer"
                            height="140"
                            image={allRestaurants.restaurant.logoUrl}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {allRestaurants.restaurant.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {allRestaurants.restaurant.category}
                                </Typography>    
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {allRestaurants.restaurant.deliveryTime} min
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Entrega R${allRestaurants.restaurant.shipping}  
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {allRestaurants.restaurant.address}  
                                </Typography>
                            </CardContent>
                        </CardActionArea>      
                    </Card>
                 )
                })}                           
            </Fragment>            
        )
    }
}

const mapStateToProps = (state) => ({
    allRestaurants: state.feed.allRestaurants,
    restaurantDetails: state.feed.restaurant,
});

const mapDispatchToProps = (dispatch) => ({
    getAllRestaurants: () => dispatch(getAllRestaurants()),
    getRestaurantsDetails: (restaurantId) => dispatch(getrestaurantsDetails(restaurantId)),
    goToRestaurantDetailPage: () => dispatch(push(routes.restaurantDetails)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetails)

const Title = styled.p`
    width: 45px;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
`













