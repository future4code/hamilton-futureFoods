import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';



class SimpleHeaderNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          
    }
  }

  render(){
   
    return (
      <BottomNavigation        
        showLabels        
      >
        <BottomNavigationAction label="Burguer" />
        <BottomNavigationAction label="Massas"  />
        <BottomNavigationAction label="Brasileira"  />
        <BottomNavigationAction label="Asiática" />
        <BottomNavigationAction label="Saudável"  />     
      </BottomNavigation>
    );
  }
  
}

export default SimpleHeaderNavigation
