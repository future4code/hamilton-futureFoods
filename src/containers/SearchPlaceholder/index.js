import React, {Component, Fragment} from "react"
import {connect} from 'react-redux';

class SearchPlaceholder extends Component {
    constructor(props) {
       super(props) 

       this.state = {}
    }

 render() {
    return (
     <>
     <BackButton showButtonGoBack={true} header={Busca}/>
     </>

    )
 }
}

export default connect(null,null)(SearchPlaceholder)