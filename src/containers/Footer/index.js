import React, {Component } from "react"
import {connect} from 'react-redux';
import { routes } from "../Router";
import { push } from "connected-react-router";
import { WrapperIcons, WrapperFooter, DivIcon} from './styled';
import Divider from '@material-ui/core/Divider'

class Footer extends Component {
    constructor(props) {
    super(props)

    this.state = {

    }}

 render() {
     const { gotToFeed, goToMyProfile} = this.props
     if (this.props.showFooter) {
 return (
     <WrapperFooter>
          <Divider/>
        <WrapperIcons>

              
            <DivIcon>
                {this.props.home ?  (
                    <img src={require('../../Assets/homepage.svg')} 
                     alt="Home" 
                     style={{color:"red"}}
                     onCLick= {gotToFeed}
                    /> 
                 ) : (
                    <img src={require('../../Assets/homepage.svg')} 
                     style={{color:"none"}} 
                     alt="Home"
                     onCLick= {gotToFeed}
                    /> )}
            </DivIcon>                       
            <DivIcon> 
               {this.props.carrinho ? (
                    <img src={require('../../Assets/carrinho.svg')} 
                     color="red" 
                     alt="carrinho"
                     onCLick= {goToMyProfile}
                    /> 
                ):(
                    <img src={require('../../Assets/carrinho.svg')} 
                     color="none"  
                     alt="carrinho"
                     onCLick= {goToMyProfile}
                    /> )}
            </DivIcon>
            <DivIcon>
                {this.props.profile ? (
                    <img src={require('../../Assets/perfil.svg')} 
                     style={{color:"red"}} 
                     alt="perfil"
                    /> 
                ):(
                    <img src={require('../../Assets/perfil.svg')} 
                     style={{color:"none"}} 
                     alt="perfil"
                    /> )} 
            </DivIcon> 

      
        </WrapperIcons>
       
     </WrapperFooter>
        )
    }
    }   
 }
 const mapDispatchToProps = (dispatch) => ({
    goToFeed: () => dispatch(push(routes.feedpage)),
    goToMyProfile: () => dispatch(push(routes.myprofile))

 })


export default connect(null,mapDispatchToProps)(Footer)


