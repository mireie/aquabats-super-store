import React from 'react';
import ProductList from "./ProductList";
import NewProductForm from "./NewProductForm";
import { Button } from "react-bootstrap"
import ProductDetail from "./ProductDetail"

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
      }, {
        name: "Test 2 Product",
        description: "Test 2 Description",
        quantity: 5,
        id: "test-id-2"
      }],
      selectedProduct: null
    }
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        newProductFormVisible: false,
        selectedProduct: null
      })
    } else {
      this.setState(prevState => ({
        newProductFormVisible: !prevState.newProductFormVisible
      }))
    }
  }

  handleDeletingProductFromList = (id) => {
    const editedMainProductList = this.state.mainProductList
      .filter(product => product.id !== id)
    this.setState({
      mainProductList: editedMainProductList,
      selectedProduct: null
    })
  }

  handleAddingNewProductToList = (newProduct) => {
    if (newProductValid(newProduct)) {
      const newMainProductList = this.state.mainProductList.concat(newProduct);
      this.setState({
        mainProductList: newMainProductList,
        newProductFormVisible: false
      })
    } else {
      this.setState({
        newProductFormVisible: false
      })
    }
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.mainProductList.filter(product => product.id === id)[0];
    this.setState({ selectedProduct: selectedProduct });
  }

  handleAddStock = (productToEdit) => {
    let updatedProduct = productToEdit
    updatedProduct.quantity++
    const editedMainProductList = this.state.mainProductList
      .filter(product => product.id !== productToEdit.id)
      .concat(updatedProduct)
    this.setState({
      mainProductList: editedMainProductList
    })
  }

  handleSubtractStock = (productToEdit) => {
    let updatedProduct = productToEdit
    updatedProduct.quantity--
    if (updatedProduct.quantity < 0) {
      updatedProduct.quantity = 0
    }
    const editedMainProductList = this.state.mainProductList
      .filter(product => product.id !== productToEdit.id)
      .concat(updatedProduct)
    this.setState({
      mainProductList: editedMainProductList
    })
  }

  render() {
    let visibleState = null;
    let buttonText = null;
    if (this.state.selectedProduct != null) {
      visibleState = <ProductDetail
        product={this.state.selectedProduct}
        deleteProduct={this.handleDeletingProductFromList}
      />
      buttonText = "Head back to Product List, Cadet!"
    } else if (this.state.newProductFormVisible) {
      visibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList} />
      buttonText = "Go back to Product List, Cadet!"
    } else {
      visibleState = <ProductList
        productList={this.state.mainProductList.sort(dynamicSort("name"))
        }
        onProductSelection={this.handleChangingSelectedProduct}
        addStock={this.handleAddStock}
        subtractStock={this.handleSubtractStock}
      />
      buttonText = "Add a product, My fine Aquadet"
    }
    return (
      <React.Fragment>
        {visibleState}
        <Button
          onClick={this.handleClick}
          variant="dark"
          className="mt-3 p-5">
          {buttonText}
        </Button>
      </React.Fragment>
    )
  }

}

export default ProductControl

const dynamicSort = (property) => {
  let sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}

function newProductValid(newProduct) {
  if (newProduct.name && newProduct.quantity && newProduct.description) {
    return true
  }
}