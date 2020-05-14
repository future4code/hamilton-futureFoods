import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';



class CardMyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
        
    render(){        

        return (            
            <Card >
                <CardActionArea>
        
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Vinil Butantã
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        Frete grátis  
                    </Typography>
                    </CardContent>
                </CardActionArea>      
            </Card>
        );
    }
}


export default connect(null,null)(CardMyProfile)