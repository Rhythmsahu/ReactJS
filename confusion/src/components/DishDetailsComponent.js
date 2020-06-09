import React, {Component} from 'react';
import {Card,CardImg,CardBody,CardImgOverlay,CardText,CardTitle} from 'reactstrap';

class DishDetails extends Component{

    renderDish(dish){
        if(dish!=null){
            return(
                <div  className="col-12 col-md-5 m-1">
                    <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>

                    <CardBody>
                    <CardTitle>
                                {dish.name}
                    </CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                    </CardBody>

                </Card>

                </div>
                
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){
            const cmt=comments.map((comment)=>{
                return(
                    
                        <li>
                        <p>{comment.comment}</p> 
                        <p>--{comment.author},{comment.date}</p>
                        </li>               
                
                )
            });

        return(
            <div className="col-12 col-md-5 m-1">
                <h4><b>Comments</b></h4>
                <div className="list-unstyled">
                    {cmt}
                </div>
                
                 
            </div>
        )
    }

    render(){
        const menu=this.props.dish;
        if(menu==null){
            return(
                <div></div>
            )
        }
        const dishdetail=this.renderDish(menu);
        const comments=this.renderComments(menu.comments);
        return(
            
                <div className="row">
                    {dishdetail}
                    {comments}
                </div>
            
        )

    }
}

export default DishDetails;