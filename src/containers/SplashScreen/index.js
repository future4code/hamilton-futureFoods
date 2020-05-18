import React, {Component, Fragment} from "react"
import { connect } from"react-redux"
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components'

const WrapperSplashScreen = styled.div `
    background-color:#e8222e;
    height:100vh;
    display:flex;
    justify-content:center;

`
class SplashScreen extends Component {
    constructor(props){
        super(props);
        this.state = {

            
    };
}

handleSplash = (e) => {
   
    this.props.goToLogin()

 }

render() {
   
    return (
     <Fragment>
         <Fade in={true} timeout={1000}>
             <WrapperSplashScreen onClick={this.handleSplash}>
                <img src={require( '../../Assets/logo-branca.svg')} 
                    alt="logo da FourFood" 
                />
             </WrapperSplashScreen>
         </Fade>
     </Fragment>
    )
}
} 
const mapDispatchToProps = dispatch => ({
   
    goToLogin: () => dispatch(push(routes.root)),
   
})


export default connect(null, mapDispatchToProps)(SplashScreen)