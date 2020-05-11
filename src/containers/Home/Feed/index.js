import React, { Component } from "react";
//import { connect } from "react-redux";
//import { push } from "connected-react-router";
import { routes } from "../../Router";
import styled from "styled-components";
//importar as actions
import  ImgMediaCard  from "../../../components/Card";




class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }





    render() {
       
        return (
            <FeedContainer>
                <TitleContainer>
                    <Title>4Food</Title> 
                </TitleContainer>

                <div>

                </div>

                {ImgMediaCard}
                {ImgMediaCard}               

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
    text-align: center;
    color: #000000;
`
const TitleContainer = styled.div`
    width: 175px;
    height: 44px;
`

