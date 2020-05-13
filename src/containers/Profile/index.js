import React, {Component, Fragment} from "react"
import { connect } from"react-redux"
import { routes } from "../Router";
import { push, replace, goBack } from "connected-react-router";
import BackButton from '../BackButton/'
import Footer from '../Footer'
import { WrapperProfile,
         Title } from './styled'

class Profile extends Component {
    constructor(props) {
    super(props)

    this.state = {
    
    }}

// componentDidMount = () => {
//     const token = window.localStorage.getItem('token')

//     if(token === null || !token) {
//     this.props.goToLogin()
// } else {
//     this.props.getProfile()
//  }
// }

render(){
    const { user } = this.props
    return (
    <WrapperProfile>
     <BackButton header={"Meu Perfil"} showButtonGoBack = {false}/>

     <Title>{user.name}</Title>
     <Title>{user.email}</Title>
     <Title>{user.cpf}</Title>

    </WrapperProfile>
    )

}
// const mapStateToProps = (state) => ({
    
//    pedidos??? : state.
//    user : state.                
    
//   })

}
const mapDispatchToProps = dispatch => ({
   
    goToLogin: () => dispatch(replace(routes.root))
   
    })
    
export default connect(null,mapDispatchToProps)(Profile);