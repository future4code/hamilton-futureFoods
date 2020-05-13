import React, {Component, Fragment} from "react"
import { connect } from"react-redux"
import { routes } from "../Router";
import {bindActionCreators} from "redux";
import * as todoAction from "../../actions/userPage";
//Estilização
import { Button, 
        TextFieldStyled, 
        WrapperAdress, 
        Text,
        DivTitle } from "./styled"
import BackButton from "../BackButton";



const FormMyAdress = [
    {
        name:"logradouro",
        type:"text",
        placeholder:"Rua/Av",
        label:"Logradouro",
        required:true,
        
    },
    {
        name:"numero",
        type:"number",
        placeholder:"Número",
        label:"Número ",
        required:true,
       
    },
    {
        name:"complemento",
        type:"number",
        placeholder:"Apto./Bloco",
        label:"Complemento",
        required:false,
       
    },
    {
        name:"bairro",
        type:"text",
        placeholder:"Bairro",
        label:"Bairro",
        required:true, 
    },
    {
        name:"cidade",
        type:"text",
        placeholder:"Cidade",
        label:"Cidade",
        required:true,
        pattern:"[A-Za-z0-9]{6,10}",
        
    },
    {
        name:"estado",
        type:"text",
        placeholder:"Estado",
        label:"Estado",
        required:true,
    }
]
class MyAdress extends Component {
    constructor(props) {
    super(props)

    this.state = {
        form: {}
    }}
handleOnChangeForm = event => {
    const { name, value} = event.target;
    this.setState({form: {...this.state.form, [name]:value}})
}

handleOnSubmit = event => {
    event.preventDefault()
    this.props.putAdress(this.state.form)
    this.setState({form:""})
}
render () {
 return (
    <Fragment>
        <BackButton showButtonGoBack={true} />
        <DivTitle>
            <Text>Meu endereço</Text>
        </DivTitle>
    
        <WrapperAdress>  
        <form onSubmit={this.handleOnSubmit}>
            {FormMyAdress.map(info => {
                return (
                <div key={info.name}>
                
                    <TextFieldStyled   
                        name={info.name}
                        placeholder={info.placeholder}
                        type={info.type}
                        value={this.state.form[info.name] || ""}
                        required={info.required}
                        onChange={this.handleOnChangeForm}
                        label={info.label}
                        variant="outlined"
                        InputLabelProps = {{shrink:true}}
                    />
                </div>)
                })}
                <Button type="submit">Salvar</Button>
        </form>
        </WrapperAdress> 
    
   </Fragment>)
}       
}

const mapDispatchToProps = (dispatch) => 
    bindActionCreators(todoAction,dispatch)

export default connect(null,mapDispatchToProps)(MyAdress)