import React, {Component} from "react"
import { connect } from"react-redux"
import {bindActionCreators} from "redux";
import * as todoAction from "../../actions/userPage";
import {Button, Div, Input, Image, Text, DivTitle} from './styled';
import BackButton from "../BackButton"

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
    const user = this.props
    if(form.cpf !== user.cpf){
        this.props.updateProfile(form.name, form.email, form.cpf)
         
    }else{
        alert("Usuário já cadastrado!")     
    }

    if(form.password !== form.confirmPassword){
        alert("Senhas divergentes. Tente novamente")
        
    }else{
        this.props.singUp(form.name, form.email, form.password, form.cpf)
    }
}

render() {
    return(
        <Div>
            <BackButton showButtonGoBack={true} />
           
             <Image src={"https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/2420CEFD-BBDE-49C8-91E3-A49B116851E9.svg"} />
             <DivTitle>
                <Text>Cadastrar</Text>
            </DivTitle>

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

const mapStateToProps = state => ({
  
    user: state.user.userInfo             
})

const mapDispatchToProps = (dispatch) =>
bindActionCreators(todoAction,dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage)