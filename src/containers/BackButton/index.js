import React, {Component, Fragment} from "react"
import {connect} from 'react-redux';
import { push, goBack } from "connected-react-router";
import {routes} from "../Router"
import { Divider } from '@material-ui/core';
import { WrapperTitle,
        WrapperBackButton,
        WrapperHeader,
        Text,
        BackButtonIcon} from './styled'

class BackButton extends Component {
render() {
    return (

        <Fragment>

            <WrapperTitle>
            <WrapperHeader>
                <Text>{this.props.header}</Text>
            </WrapperHeader>
            <WrapperBackButton>
                <div>{this.props.showButtonGoBack ? <BackButtonIcon src={require('../../Assets/back.svg')} onClick={this.props.goBack}/> : "" }</div>
            </WrapperBackButton>
            <Divider/>
            </WrapperTitle>
           
        </Fragment>

    )
}
}
const mapDispatchToProps = dispatch => {
    return {
    goBack: () => dispatch(goBack())
    }
}

export default connect (null, mapDispatchToProps)(BackButton)