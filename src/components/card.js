import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ModifyModal from "./modal"; 

const Item = (props) =>
{
const { dish, image, price, id } = props.item ; 
const {deleteDish, modifyDish} = props ; 

return(

        <div className="d-flex justify-content-center">
         <Card 
         className="shadow m-2 " 
         style={{width : 250}}
         >
        <CardImg 
        top width="100%" 
        height ="150px" 
        src={image} />
        <CardBody>
          <CardTitle>{dish}</CardTitle>
          <CardSubtitle>{price}</CardSubtitle>
          <div className="d-flex justify-content-between">
          <Button className="mt-3 btn-sm" color="danger" onClick={()=>deleteDish(id)}> Delete </Button>
          <ModifyModal modifyDish={modifyDish} item={props.item}/>
          </div>
        </CardBody>
         </Card>
        </div> 

)}
export default Item ; 