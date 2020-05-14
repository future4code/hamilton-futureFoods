import React, {Component, Fragment} from "react";
import { connect } from"react-redux";
import { routes } from "../Router";
import { push, replace, goBack } from "connected-react-router";
import BackButton from '../BackButton/';
import Footer from '../Footer';
import CardMyProfile from "../../components/CardMyProflile"
import Edit from "../../Assets/edit.svg";
import { WrapperProfile,
         Title,
         Img } from './styled';

import { getProfile } from "../../actions/userPage"
import { getOrderHistory } from "../../actions/feedRestaurants"

class Profile extends Component {
    constructor(props) {  
    super(props)

    this.state = {
    
    }}

componentDidMount = () => {
   const token = window.localStorage.getItem('token')
   
   this.props.getProfile()
   this.props.getOrderHistory()

   if(token === null || !token) {
   this.props.goToLogin()

   }
}

render(){
  
    const { goToEditUser, goToMyAdress, user } = this.props
    console.log(user)

    return (
    <WrapperProfile>
      <BackButton header={"Meu Perfil"} showButtonGoBack = {false}/>

      
        {user && 
         
          <div>
            <Title><strong>{user.name}</strong></Title>
            <Title><strong>{user.email}</strong></Title>
            <Title><strong>{user.cpf}</strong></Title>
            <Img src= {`${Edit}`} onClick = {goToEditUser}/>
        </div>
            }
        

      <div>
        <Title>Enderço cadastrado: </Title>
        {/* <Title><strong>{user.address}</strong></Title> */}
        <Img src= {`${Edit}`} onClick = {goToMyAdress}/>
      </div>
        <CardMyProfile />
        <Footer showFooter={true} home={false} carrinho={false} profile={true} />
    </WrapperProfile>
    )

}
}
const mapStateToProps = state => ({
  
      user: state.user.userInfo             
})


const mapDispatchToProps = dispatch => ({
   
    goToLogin: () => dispatch(replace(routes.root)),
    goToEditUser: () => dispatch(push(routes.userEdit)),
    gotToMyAdress:() => dispatch(push(routes.myadress)),

    getProfile:() => dispatch(getProfile()),
    getOrderHistory:() => dispatch(getOrderHistory())
    })
    
export default connect(mapStateToProps,mapDispatchToProps)(Profile);

