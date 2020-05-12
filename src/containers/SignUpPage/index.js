import React, {Component, Fragment} from "react"
import { connect } from"react-redux"
import { routes } from "../Router";

const FormSignUp = [
    {
        name:"nome",
        type:"text",
        placeholder:"Nome e sobrenome",
        label:"Nome*",
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
        label:"E-mail*",
        required:true,
        title: "Campo obrigatório",
        pattern:"[a-z0-9_.+-%]+@[a-z0-9.-]+\.[a-z]{3,}$" 
    },
    {
        name:"password",
        type:"password",
        placeholder:"Mínimo 6 caracteres",
        label:"Senha*",
        title:"Digite no mínimo 6 caracteres",
        required:true,
        pattern:"[A-Za-z0-9]{6,10}",
        
    },
    {
        name:"password",
        type:"password",
        placeholder:"Confirme a senha anterior",
        label:"Senha*",
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
    const { name, value } = event.targe;
    this.setState({form: {...this.state.form, [name]:value}})
}
handleOnSubmit = event => {
    event.preventDefault()
}
    render () {
        return (
           <Fragment>
           <form onSubmit={this.handleOnSubmit}>
               {FormSignUp.map(info => {
                   return (
                       <div key={info.name}>
                       <label htmlFor={info.name}>{info.name}</label>
                           <input
                               name={info.name}
                               placeholder={info.placeholder}
                               type={info.type}
                               value={this.state.form[info.name] || ""}
                               required={info.required}
                               onChange={this.handleOnChangeForm}
                               pattern={info.pattern}
                               title={info.title}
       
                           />
       
                       </div>)
               })}
               <button type="submit">Entrar</button>
           </form>
           </Fragment> 
        )
       
    }       
}
export default connect(null,null)(SignUpPage)