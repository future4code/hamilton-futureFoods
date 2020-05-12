import React, {Component, Fragment} from "react"
import {connect} from 'react-redux';
import { push, goBack } from "connected-react-router";
import {routes} from "../Router"
import { Divider } from '@material-ui/core';
import styled from 'styled-components'

const WrapperBackButton = styled.div `
height:64px;
`
class BackButton extends Component {

render() {
    return (
        <>
        <WrapperBackButton>
            <div>{this.props.showButtonGoBack ? <img src={require('../../Assets/back.svg')} onClick={this.props.goBack}/> : "" }</div>
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