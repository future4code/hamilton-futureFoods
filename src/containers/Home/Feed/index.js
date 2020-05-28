import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../Router";
import styled from "styled-components";
import { getAllRestaurants, getRestaurantsDetails } from "../../../actions/feedRestaurants";
import SimpleHeaderNavigation from "../../../components/ScrollLateral";
import RestaurantsList from "../../restaurantsList/index";
//MATERIAL-UI SEARCH
import SearchBar from 'material-ui-search-bar'


class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
        };
    }

    componentDidMount(){
        const token = window.localStorage.getItem("token")
        if (token === null) {
          this.props.goToLoginPage()
        }

      
        this.props.getAllRestaurants()
      }

    handleInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    };



    render() {
        const { searchInput } = this.state
               
        return (
            <div>
                <TitleContainer>
                    <Title>FourFood</Title> 
                </TitleContainer>

                <SearchContainer>
                    <SearchBar
                    value={searchInput}
                    onChange={this.handleInputChange}  
                    hintText="Restaurantes"              
                    style={{
                        margin: '0 auto',
                        maxWidth: 800
                    }}
                    />
                </SearchContainer>
                
                <NavigationContainer>
                    <SimpleHeaderNavigation/>
                </NavigationContainer>
                
                <div>
                    <RestaurantsList/>
                </div>
                           
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => ({
        goToLoginPage: () => dispatch(push(routes.root)),
        getAllRestaurants: () => dispatch(getAllRestaurants()),
});


export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);



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
const TitleContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
`

const NavigationContainer = styled.div`
    width: 360px;
    height: 42px; 
    margin: 10px 0px;
    dipĺay: flex;
    align-itens: center;
    justify-content: center;  
`
const SearchContainer = styled.div`
    margin: 10px 16px;
`

