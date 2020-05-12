import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { routes } from "../Router";
import { Button, TextFieldStyled, WrapperAdress, Text, DivTitle, Image } from "./style";


const FormLogin = [
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
        pattern:"[A-Za-z0-9]{6,10}"
        
    }
]
class LoginPage extends Component {
    constructor(props) {
    super(props)

    this.state =  {
        form: {
            email: "",
            password: ""
        }
    }}
handleOnChangeForm = event => {
    const { name, value} = event.target;
    this.setState({ form: {...this.state.form,[name]:value}})
}
handleOnSubmit = event => {
    event.preventDefault()

}

render () {
    return (
       <Fragment>
           <Image src={"https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/2420CEFD-BBDE-49C8-91E3-A49B116851E9.svg"} />
           <DivTitle>
               <Text>Entrar</Text>
           </DivTitle>
           <WrapperAdress>  
           <form onSubmit={this.handleOnSubmit}>
               {FormLogin.map(info => {
                   return (
                   <div key={info.name}>
                   {/* <label htmlFor={info.name}>{info.label}</label> */}
                       <TextFieldStyled   
                           name={info.name}
                           placeholder={info.placeholder}
                           type={info.type}
                           value={this.state.form[info.name] || ""}
                           required={info.required}
                           onChange={this.handleOnChangeForm}
                           label={info.label}
                           variant="outlined"
                           InputLabelProps = {{shrink:true}} pattern={info.pattern}
                           title={info.title}
                       />
                   </div>)
                   })}
                   <Button type="submit">Entrar</Button>
           </form>
           </WrapperAdress> 
           <DivTitle>
               <Text>Não possui cadastro? Clique aqui.</Text>
           </DivTitle>
      </Fragment>)
   }       
   }

export default connect()(LoginPage)