import React from 'react';
import ProductList from "./ProductList";
import NewProductForm from "./NewProductForm";

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newProductFormVisible: false,
      mainProductList: []
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

  render(){
    let visibleState = null;
    let buttonText = null;
    if (this.state.newProductFormVisible) {
      visibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList} />
      buttonText = "Go back to Product List, Cadet!"
    } else {
      visibleState = <ProductList productList={this.state.mainProductList} />
      buttonText = "Add a product, My fine Aquadet"
    }
    return (
      <React.Fragment>
        { visibleState }
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }


}

export default ProductControl