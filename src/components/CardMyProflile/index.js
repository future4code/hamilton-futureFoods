import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import * as moment from 'moment';
import 'moment/locale/pt-br'


class CardMyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }   
        
    render(){        
        const { orderHistory } = this.props
        console.log(orderHistory)
        return (            
            <Card >
                <p>Histórico de pedidos: </p>
                <p>{orderHistory.length === 0  ?
                <strong>Você não realizou nenhum pedido</strong> : ""}</p>
      
            {orderHistory.length > 1 && orderHistory.map(order => {

               return(
                
                <CardActionArea>
        
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {order.restaurantName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {moment(order.createdAt).format("DD MMMM YYYY")}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        <strong>SUBTOTAL: R${order.totalPrice}</strong>
                    </Typography>
                    </CardContent>
                </CardActionArea>     
                 )
      
                })} 
            </Card>
        );
    }
}

const mapStateToProps = state => ({
    
    orderHistory: state.feed.orderHistory
               
})

export default connect(mapStateToProps,null)(CardMyProfile)