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
import { Card } from "@material-ui/core";

class Profile extends Component {
    constructor(props) {
    super(props)

    this.state = {
    
    }}

componentDidMount = () => {
   const token = window.localStorage.getItem('token')
   this.props.getProfile()

   if(token === null || !token) {
   this.props.goToLogin()

   }
}

render(){
    const { user, goToEditUser, goToMyAdress, order } = this.props
    return (
    <WrapperProfile>
      <BackButton header={"Meu Perfil"} showButtonGoBack = {false}/>
      <div>
        <Title><strong>{user.name}</strong></Title>
        <Title><strong>{user.email}</strong></Title>
        <Title><strong>{user.cpf}</strong></Title>
        <Img src= {`${Edit}`} onClick = {goToEditUser}/>
      </div>

      <div>
        <Title>Enderço cadastrado: </Title>
        <Title><strong>{user.adress}</strong></Title>
        <Img src= {`${Edit}`} onClick = {goToMyAdress}/>
      </div>

      <div>
      <Title>Histórico de pedidos: </Title>
      <Title>{order.length === 0  ?
       <strong>Você não realizou nenhum pedido</strong> : ""}

       {order.length > 1 && order.map(pedido => {
         return(
           //Buscar por meio de props o modelinho dos cards e atribuiur moment
           <CardMyProfile


           />
         )

       }) }
       </Title>
      </div>
      
    </WrapperProfile>
    )

}
}
const mapStateToProps = state => ({
    
      order: state.feeed.order,
      user: state.user               
})


const mapDispatchToProps = dispatch => ({
   
    goToLogin: () => dispatch(replace(routes.root)),
    goToEditUser: () => dispatch(push(routes.userEdit)),
    gotToMyAdress:() => dispatch(push(routes.myadress))
    })
    
export default connect(mapStateToProps,mapDispatchToProps)(Profile);

