import React, { Component } from "react";
//import { connect } from "react-redux";
//import { push } from "connected-react-router";
import { routes } from "../../Router";
import styled from "styled-components";
//importar as actions
import  ImgMediaCard  from "../../../components/Card";

//MATERIAL-UI SEARCH
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';





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
        // const useStyles = makeStyles((theme) => ({
        //     search: {
        //       position: 'relative',
        //       borderRadius: theme.shape.borderRadius,
        //       backgroundColor: fade(theme.palette.common.white, 0.15),
        //       '&:hover': {
        //         backgroundColor: fade(theme.palette.common.white, 0.25),
        //       },
        //       marginRight: theme.spacing(2),
        //       marginLeft: 0,
        //       width: '100%',
        //       [theme.breakpoints.up('sm')]: {
        //         marginLeft: theme.spacing(3),
        //         width: 'auto',
        //       },
        //     },
        //     searchIcon: {
        //       padding: theme.spacing(0, 2),
        //       height: '100%',
        //       position: 'absolute',
        //       pointerEvents: 'none',
        //       display: 'flex',
        //       alignItems: 'center',
        //       justifyContent: 'center',
        //     },
        //     inputRoot: {
        //       color: 'inherit',
        //     },
        //     inputInput: {
        //       padding: theme.spacing(1, 1, 1, 0),
        //       // vertical padding + font size from searchIcon
        //       paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        //       transition: theme.transitions.create('width'),
        //       width: '100%',
        //       [theme.breakpoints.up('md')]: {
        //         width: '20ch',
        //       },
        //     },
        //     margin: {
        //         margin: theme.spacing(1),
        //     },
        //   }));
        
        // const classes = useStyles();
       
        return (
            <FeedContainer>
                <TitleContainer>
                    <Title>4Food</Title> 
                </TitleContainer>

                <SearchContainer>
                    {/* <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        name="searchInput"
                        onChange={this.handleInputChange}
                        value={this.state.searchInput}
                        placeholder="Restaurantes"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div> */}
                    <SearchInput 
                        name="searchInput"
                        onChange={this.handleInputChange}
                        value={this.state.searchInput}
                        placeholder="Restaurante"                           

                    />
                </SearchContainer>
                
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
const SearchInput = styled.input`
    width: 328px;
    height: 56px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
`
const SearchContainer = styled.div`
    
    display: flex;
    align-itens: center;
    justify-content: center;
`

