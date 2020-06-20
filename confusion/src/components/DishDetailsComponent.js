import React from 'react';
import {Card,CardImg,CardBody,CardImgOverlay,CardText,CardTitle} from 'reactstrap';



    function RenderDish({dish}){
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

    function RenderComments({comments}){
            const cmt=comments.map((comment)=>{
                return(
                    
                        <li>
                        <p>{comment.comment}</p> 
                        <p>--{comment.author},{new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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

    const DishDetails=(props)=>{
        const menu=props.dish;
        if(menu==null){
            return(
                <div></div>
            )
        }
       // const dishdetail=RenderDish(menu);
       // const comments=RenderComments(menu.comments);
        return(
                <div class="container">
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.dish.comments}/>
                </div>
                </div>
            
        )

    }


export default DishDetails;