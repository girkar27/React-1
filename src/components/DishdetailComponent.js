import React  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import { DISHES } from '../shared/dishes';
import { Link } from 'react-router-dom';



  function RenderDish({dish}){
   	return (
      <div className="col-12 col-md-5 m-1">
        <Card>
    	    <CardImg top src={dish.image} alt={dish.name} />
    	    <CardBody>
    	      <CardTitle>{dish.name}</CardTitle>
    	    	<CardText>{dish.description}</CardText>
    	    </CardBody>
    	  </Card>
      </div>
  	 ); 	
  }



  function RenderComments({comments}){
    if(comments !=null)
    // console.log(comments)
    return(
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) =>{
            return(
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }


          
  



  function DishDetail(props){
    if (props.dish != null)
    // console.log(props.dish)
      return(
        <div className="container">
          <div className="row">
            <Breadcrumb>

              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              
            </div>                
          </div>
          <div className="row">
            <RenderDish dish = {props.dish} />
            <RenderComments comments = {props.comments} />
          </div>

        </div>
      );
            

    else
      return(
        <div></div>
      );
  }
   

export default DishDetail;
  