
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, FormGroup } from 'reactstrap';


class ModalExample extends React.Component {
  constructor(props){
    super(props)
    const {dish, price, image,id} = this.props.item
    this.state = {
      modal : false,
     dish,
     price,
     image,
     id ,
    }
  }


   toggle = () => {
     this.setState({modal :!this.state.modal})
    };
  getInputValues = (e) => {
    this.setState({[e.target.name] : e.target.value})
    const {dish, price, image} = this.state
  }
  getLastInputValue = () =>{
    const {id,dish, price, image} = this.state ;
    this.props.modifyDish({id, dish, price, image});
    this.toggle();
  }
  
  render(){
    
    const {
      className
    } = this.props;

  return (
    <div>
      <Button className="mt-3 btn-sm" color="primary" onClick={this.toggle}>Modify</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={className}>
        <ModalHeader toggle={this.toggle}>Add dish : </ModalHeader>
        <ModalBody>
        <Form>
      <FormGroup>
        <Label for="dish">Dish name : </Label>
        <Input type="text" name="dish" id="dish" placeholder="" onChange={this.getInputValues} value={this.state.dish} />
      </FormGroup>
      <FormGroup>
        <Label for="price">Dish price : </Label>
        <Input type="text" name="price" id="price" placeholder="Dish price" onChange={this.getInputValues}  value={this.state.price} />
      </FormGroup>
      <FormGroup>
        <Label for="image">File</Label>
        <Input type="file" name="image" id="image" onChange={this.getInputValues} 
         />
      </FormGroup>
      </Form>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.getLastInputValue}>Save</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}}

export default ModalExample;