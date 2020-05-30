import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Item = (props) =>
{
const { dish, image, price, id } = props.item ; 
const {deleteDish} = props ; 

return(
        <div>
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
          <Button className="mt-3 btn-sm" color="danger" onClick={()=>deleteDish(id)}> Delete </Button>
        </CardBody>
         </Card>
        </div>
    
)
  }
export default Item ; 