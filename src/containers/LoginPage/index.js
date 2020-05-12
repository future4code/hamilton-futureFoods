import React, { Component } from "react";
import { connect } from 'react-redux';
import { routes } from "../Router";
import {bindActionCreators} from "redux";
import * as todoAction from "../../actions/userPage";

const FormLogin = [
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
    this.props.login(this.state.email, this.state.password)

}

render () {
 return (
    <>
    <form onSubmit={this.handleOnSubmit}>
        {FormLogin.map(info => {
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
    </> 
 )

}

}
const mapDispatchToProps = (dispatch) =>
bindActionCreators(todoAction,dispatch)

export default connect(null, mapDispatchToProps)(LoginPage)