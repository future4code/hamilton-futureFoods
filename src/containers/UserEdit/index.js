import React, {Component} from "react"
import { connect } from"react-redux"
import {bindActionCreators} from "redux";
import * as todoAction from "../../actions/userPage";
import { Button, Div, Input} from './styled';
import BackButton from "../BackButton"

const FormUpDateProfile = [
    {
        name:"name",
        type:"text",
        placeholder:"Nome e sobrenome",
        label:"Nome",
        required:true,
        title: "Campo obrigatório",
        pattern:"[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{3,}"

    },
    {
        name:"cpf",
        type:"text",
        placeholder:"000.000.000-00",
        label:"CPF",
        required:true,
        title:"Digite um CPF no formato: xxx.xxx.xxx-xx",
        pattern:"\d{3}\.\d{3}\.\d{3}-\d{2}" 

    },
    {
        name:"email",
        type:"email",
        placeholder:"email@email.com",
        label:"E-mail",
        required:true,
        title: "Campo obrigatório",
        pattern:"[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$" 
    }
]
class SignUpPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {}

        }
    }
componentDidMount = () => {
    const token = window.localStorage.getItem('token')
    
    this.props.updateProfile()

    if(token === null || !token) {
    this.props.goToLogin()

    }
}
handleOnChangeForm = event => {
    const { name, value } = event.target;
    this.setState({form: {...this.state.form, [name]:value}})
}
handleOnSubmit = event => {
    
    event.preventDefault()
    const {form} = this.state
   
    this.props.updateProfile(form.name, form.email, form.cpf)
}

render() {
    return(
        <Div>
            <BackButton header={"Editar"}/>
            <form onSubmit={this.handleOnSubmit}>
               {FormUpDateProfile.map(info => {
                   return (
                       <div key={info.name}>
                           <Input
                               name={info.name}
                               placeholder={info.placeholder}
                               type={info.type}
                               value={this.state.form[info.name] || ""}
                               required={info.required}
                               onChange={this.handleOnChangeForm}
                               pattern={info.pattern}
                               title={info.title}
                               label={info.label}
                               variant="outlined" 
                               InputLabelProps = {{shrink:true}}
                           />
                       </div>)
               })}
               <Button type="submit">Salvar</Button>
           </form>
        </Div>
        )
    }       
}

const mapStateToProps = state => ({
  
    user: state.user.userInfo             
})

const mapDispatchToProps = (dispatch) =>
bindActionCreators(todoAction,dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage)