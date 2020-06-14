import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { DISHES } from '../shared/dishes'; 
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';


function RenderMenuitem({ dish , onClick}){
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
    }}>
    <Card>
      <Link to={`/menu/${dish.id}`} > 
      <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />   
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
      </Link>
    </Card>
    </FadeTransform>
  );
}

const Menu = (props)=>{

  const menu = props.dishes.dishes.map((dish)=>{
      return(
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <RenderMenuitem dish={dish}/>
        </div> 
      );

  });

  if (props.dishes.isLoading) {
      return(
        <div className="container ">
          <div className="row">            
            <Loading />
          </div>
        </div>
      );
    }
    else if (props.dishes.errMess) {
      return(
        <div className="container">
          <div className="row">            
            <h4>{props.errMess}</h4>
          </div>
        </div>
      );
    }
    else
      return(
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem> 
              <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Menu</h3>
            </div>
          </div>
          <div className="row">
            {menu}
          </div>
        </div>
    );



}
 

export default Menu;