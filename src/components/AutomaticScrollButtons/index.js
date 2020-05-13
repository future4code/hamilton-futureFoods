import React from "react";
import PropTypes from 'prop-types';
//import { connect } from "react-redux";
//import { push } from "connected-react-router";
import styled from 'styled-components';


//MATERIAL-UI DO SCROLL BUTTONS
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { compose, spacing, palette } from '@material-ui/system';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  export default function ScrollableTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const onClickFilter = () => {
      console.log("o filtro foi clicado")
    }
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onClick={onClickFilter}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Burguer" {...a11yProps(0)} />
            <Tab label="Brasileira" {...a11yProps(1)} />
            <Tab label="Asiática" {...a11yProps(2)} />
            <Tab label="Massas" {...a11yProps(3)} />
            <Tab label="Doces" {...a11yProps(4)} />
            <Tab label="Saudável" {...a11yProps(5)} />  
          </Tabs>
        </AppBar>      
      </div>
    );
  }
  









