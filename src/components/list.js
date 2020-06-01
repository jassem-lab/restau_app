import React, {useState} from 'react';
import Card from './card' ; 
const arr =[
  {
    id : 0,
    dish : "Spaghetti",
    image: "https://img.cuisineaz.com/610x610/2013-12-20/i2142-spaghetti-a-la-sauce-tomate.jpg", 
    price : " 10dt"
  },
  {
    id : 1,

    dish : "Couscous",
    image : "https://static.750g.com/images/600-600/4b4c2c9c149f4f59c4a914df44278d41/couscous-tunisien.jpeg", 
    price : " 10dt"
  },
  {
    id : 2,
    dish : "Pizza",
    image : "https://www.galbani.fr/wp-content/uploads/2017/07/pizza_parma.png", 
    price : " 10dt"
  },
  {
    id : 3,
    dish : "Sandwich",
    img : "https://img.cuisineaz.com/680x357/2017-08-01/i131220-.jpeg", 
    price : " 10dt"
  }
]

 const List = (props) => {
 
  const [list, setList] = useState(arr); 

  

  const deleteDish = (id) =>{
    setList(list.filter((el)=>el.id!== id))
  
  }
 
  const modifyDish = (item) =>{
    setList(list.map((element, index)=>
      element.id===item.id?element=item:element
    ))
    console.log('item from list component', item) ; 

  }

 return (list.length===0?<div style={{marginTop : 20, fontSize : 16}}>No items</div>:list.map((element , index)=>
 <Card 
  key={element.id}
  item={element}
  deleteDish={deleteDish}
  modifyDish={modifyDish}
  />
 ))        
}

export default List; 