import React, { Component } from "react";
//import { connect } from "react-redux";
//import { push } from "connected-react-router";
import { routes } from "../../Router";
import styled from "styled-components";
//importar as actions
import  ImgMediaCard  from "../../../components/Card";
import SimpleHeaderNavigation from "../../../components/ScrollLateral";

//MATERIAL-UI SEARCH
import SearchBar from 'material-ui-search-bar'





class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };



    render() {
      
       
        return (
            <FeedContainer>
                <TitleContainer>
                    <Title>4Food</Title> 
                </TitleContainer>
                <SearchBar
                onChange={this.handleInputChange}  
                hintText="Restaurantes"              
                style={{
                    margin: '0 auto',
                    maxWidth: 800
                }}
                />
                <NavigationContainer>
                    <SimpleHeaderNavigation/>
                </NavigationContainer>
                
                                
                <CardContainer>
                    <ImgMediaCard />                                 
                </CardContainer>
                <CardContainer>
                    <ImgMediaCard />                                 
                </CardContainer>
                <CardContainer>
                    <ImgMediaCard />                                 
                </CardContainer>

               
            </FeedContainer>
        );
    }
}

// const mapStateToProps = (state) => ({
    
// });

// const mapDispatchToProps = (dispatch) => {
//     return{

//     }
// };


export default FeedPage;


const FeedContainer = styled.div`
    
`
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
    align-itens: center;
    justify-content: center;
    margin-bottom: 20px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
`
const CardContainer = styled.div`
    margin: 10px 16px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
`
const SearchContainer = styled.div`
    width: 328px;
    height: 56px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;    
`
const NavigationContainer = styled.div`
    width: 360px;
    height: 42px;
    margin: 10px;   
`
const BottomNavigationContainer = styled.div`
    height: 49px;
    width: 360px;
    
`




