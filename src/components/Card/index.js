import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Hamburguer from '../../Assets/hamburguer.jpg';



class ImgMediaCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
        
    render(){        

        return (            
            <Card >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Hamburguer"
                    height="140"
                    image={Hamburguer}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Vinil Butantã
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        60 - 50 min 
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


export default ImgMediaCard


