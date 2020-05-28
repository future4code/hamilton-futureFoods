import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { getAllRestaurants, getRestaurantDetails } from "../../actions/feedRestaurants";
import styled from "styled-components";
//MATERIAL-UI CARD
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



class RestaurantsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }


    handleOnClickRestaurantDetails = (restaurantId) => {
        localStorage.setItem('restaurantId ', restaurantId)
        this.props.getRestaurantDetails(restaurantId)
        this.props.goToRestaurantDetailsPage(restaurantId)
    }


    render() {
        const { allRestaurants } = this.props
        
        return(
            <Fragment>
                {allRestaurants.map(restaurant => {
                 return(
                    <CardContainer>
                        <Card 
                        key={restaurant.id}
                        onClick={() => this.handleOnClickRestaurantDetails(restaurant.id)}
                        >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Hamburguer"
                                height="140"
                                image={restaurant.logoUrl}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {restaurant.name}
                                    </Typography>
        
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {restaurant.deliveryTime} min
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Frete R${restaurant.shipping}  
                                    </Typography>
                                </CardContent>
                            </CardActionArea>      
                        </Card>
                    </CardContainer>
                    
                 )
                })}                           
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
    getRestaurantDetails: (restaurantId) => dispatch(getRestaurantDetails(restaurantId)),
    goToRestaurantDetailsPage: () => dispatch(push(routes.restaurantDetails)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList)

const CardContainer = styled.div`
    margin: 15px 16px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
`













