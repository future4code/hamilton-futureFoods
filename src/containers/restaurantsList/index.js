import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { getAllRestaurants, getRestaurantDetails } from "../../actions/feedRestaurants";

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















