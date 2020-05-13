import React, {Component, Fragment} from "react"
import {connect} from 'react-redux';
import { push } from "connected-react-router";

// const Tarefa = styled.li`
//   text-align: left;
//   text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
// `;

// const Img = styled.img ``



// class Footer extends Component {
//     constructor(props) {
//     super(props)

//     this.state = {

//     }}

// render() {
//   return (
//     <WrapperFooter>
//      <WrapperIcons>
//         <div>{this.props.showFooter ? (
        
//             <div>{this.props.home ? ( <Img src={require('../../Assets/homepage.svg')} style={{color:none}}/> ):
//              (<Img src={require('../../Assets/homepage.svg')} style={{color:red}}/> )}</div>

//              <div>{this.props.carrinho ? (<Img src={require('../../Assets/carrinho.svg')} style={{color:none}}/> ):
//              (<Img src={require('../../Assets/carrinho.svg')} style={{color:red}}/> )}</div>

//              <div>{this.props.profile ? (<Img src={require('../../Assets/pessoa.svg')} style={{color:none}}/> ):
//              (<Img src={require('../../Assets/pessoa.svg')} style={{color:red}}/> )} </div> 
        
//            ) : ("")}</div>
//      </WrapperIcons>

//     </WrapperFooter>
//         )

//     }
// }