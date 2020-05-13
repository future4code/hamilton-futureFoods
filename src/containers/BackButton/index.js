import React, {Component, Fragment} from "react"
import {connect} from 'react-redux';
import { push, goBack } from "connected-react-router";
import {routes} from "../Router"
import { Divider } from '@material-ui/core';
import styled from 'styled-components'

const WrapperBackButton = styled.div `
    height:64px;
    width:360px;
`
const WrapperButton = styled.div `

`
const WrapperHeader = styled.div `
    text-align:center;
    align-self:center;

`
const Img = styled.img `
    width: 23px;
    height: 24px;
    object-fit: contain;
    margin-top:30px;
    margin-right:16px;

`
class BackButton extends Component {

render() {
    return (
     <>
        <WrapperBackButton>
          <WrapperButton>
            <div>{this.props.showButtonGoBack ? <Img src={require('../../Assets/back.svg')} onClick={this.props.goBack}/> : "" }</div>
          </WrapperButton>
          <WrapperHeader>
            <div>{this.props.header}</div>
          </WrapperHeader>
        </WrapperBackButton>
        <Divider/>
      </>
    )
}
}
const mapDispatchToProps = dispatch => {
    return {
    goBack: () => dispatch(goBack())
    }
}

export default connect (null, mapDispatchToProps)(BackButton)