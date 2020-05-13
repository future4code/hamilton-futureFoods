import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { getAllRestaurants, getRestaurantsDetails } from "../../actions/feedRestaurants";

//MATERIAL-UI CARD
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Hamburguer from '../../Assets/hamburguer.jpg';


class RestaurantsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
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
                <Card 
                key={restaurants.id}
                onClick={handleOnClickRestaurantsDetails}
                >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Hamburguer"
                        height="140"
                        image={Hamburguer}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {restaurants.name}
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                            {restaurants.deliveryTime} 
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {restaurants.shipping}  
                            </Typography>
                        </CardContent>
                    </CardActionArea>      
                </Card>
            
            </Fragment>            
        )
    }
}

const mapStateToProps = (state) => ({
    allRestaurants: state.restaurants.allRestaurants,
});

const mapDispatchToProps = (dispatch) => ({
    goToLoginPage: () => dispatch(push(routes.root)),
    getAllRestaurants: () => dispatch(getAllRestaurants()),
    getRestaurantsDetails: (restaurantId) => dispatch(getrestaurantsDetails(restaurantId)),
    //goToRestaurantDetailsPage: () => dispatch(push(routes.restaurantDetails)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList)













