import React from 'react';
import ProductList from "./ProductList";
import NewProductForm from "./NewProductForm";
import { Button } from "react-bootstrap"

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newProductFormVisible: false,
      mainProductList: [{
        name: "Test Product",
        description: "Test Description",
        quantity: 105,
        id: "test-id"
      }],
      selectedTicket: null
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      newProductFormVisible: !prevState.newProductFormVisible
    }))
  }

  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({
      mainProductList: newMainProductList,
      newProductFormVisible: false
    })
  }



  // handleAddingStock = (addQuantity) => {
  //  
  //  const newQuantityOfProduct = this.state.mainProductlist["id"]
  // 
  // 
  // }

  render() {
    let visibleState = null;
    let buttonText = null;
    if (this.state.newProductFormVisible) {
      visibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList} />
      buttonText = "Go back to Product List, Cadet!"
    } else {
      visibleState = <ProductList 
        productList={this.state.mainProductList} 
        />
      buttonText = "Add a product, My fine Aquadet"
    }
    return (
      <React.Fragment>
        {visibleState}
        <Button
          onClick={this.handleClick}
          variant="primary"
          className="mt-3">
          {buttonText}
        </Button>
      </React.Fragment>
    )
  }

}

export default ProductControl