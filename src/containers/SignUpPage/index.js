import React, {Component} from "react"
import { connect } from"react-redux"
import {bindActionCreators} from "redux";
import * as todoAction from "../../actions/userPage";
import { routes } from "../Router";
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
// import Logo from "../style/logo-future.png";

const Input =  styled(TextField)`
  width: 328px;
  /* height:56px; */
  border-radius: 2px;
  margin: 8px 16px;
  gap: 8px;
`
const Div = styled.div`
/* width: 360px;
margin: 0 auto;
display: flex;
flex-direction: column;
height: 640px; */
margin-bottom:50px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start; 
`
const Button = styled.button`
width: 328px;
height: 42px;
border-radius: 2px;
background-color:#e8222e;
`

const FormSignUp = [
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
    },
    {
        name:"password",
        type:"password",
        placeholder:"Mínimo 6 caracteres",
        label:"Senha",
        title:"Digite no mínimo 6 caracteres",
        required:true,
        pattern:"[A-Za-z0-9]{6,10}",
        
    },
    {
        name:"confirmPassword",
        type:"password",
        placeholder:"Confirme a senha anterior",
        label:"Senha",
        title:"Digite no mínimo 6 caracteres",
        required:true,
        pattern:"[A-Za-z0-9]{6,10}",
        
    }
]
class SignUpPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {}

        }
    }
handleOnChangeForm = event => {
    const { name, value } = event.target;
    this.setState({form: {...this.state.form, [name]:value}})
}
handleOnSubmit = event => {
    event.preventDefault()
    const {form} = this.state

    if(form.password !== form.confirmPassword){
        alert("Senhas divergentes. Tente novamente")
        
    }else{
        this.props.singUp(form.name, form.email, form.password, form.cpf)
    }
}

render() {
    return(
        <Div>

            {/* <img src={Logo}/> */}
                
<form onSubmit={this.handleOnSubmit}>
               {FormSignUp.map(info => {
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
               <Button type="submit">Entrar</Button>
           </form>
        </Div>
        )
    }       
}


const mapDispatchToProps = (dispatch) =>
bindActionCreators(todoAction,dispatch)



export default connect(null,mapDispatchToProps)(SignUpPage)