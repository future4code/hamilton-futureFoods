import React, {Component, Fragment} from "react"
import {connect} from 'react-redux';
import { push } from "connected-react-router";
import styled from 'styled-components'

// const Tarefa = styled.li`
//   text-align: left;
//   text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
// `;

 const Img = styled.img `
    
 `
 
 const WrapperFooter = styled.div``

 const WrapperIcons = styled.div ``



class Footer extends Component {
    constructor(props) {
    super(props)

    this.state = {

    }}

 render() {
     if (this.props.showFooter) {

     

 return (
     <WrapperFooter>
        <WrapperIcons>
            
            <div>
                   
                    <div>{this.props.home ? ( <Img src={require('../../Assets/homepage.svg')} style={{color:"red"}}/> ) :
                    (<Img src={require('../../Assets/homepage.svg')} style={{color:"none"}}/> )}</div>
       
                   <div>{this.props.carrinho ? (<Img src={require('../../Assets/carrinho.svg')} color="red"/> ):
                    (<Img src={require('../../Assets/carrinho.svg')} color="none" /> )}</div>

                   <div>{this.props.profile ? (<Img src={require('../../Assets/perfil.svg')} style={{color:"red"}}/> ):
                    (<Img src={require('../../Assets/perfil.svg')} style={{color:"none"}}/> )} </div> 

                
           </div>

        </WrapperIcons>
     </WrapperFooter>
        )
    }
    }   
 }

export default Footer

 