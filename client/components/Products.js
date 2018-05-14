import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import ProductGrid from './ProductGrid';

class Products extends Component {
    
    componentDidMount() {
      this.props.fetchData('https://www.zopnow.com/toys/discounts.json');
    }

    renderItems() {
      const { items } = this.props;
      console.log(items)
      if (items.length != 0) {
        return items.map((item, i) => {
         if (item.name === "ProductGrid") {
          return <ProductGrid key={i} item={item} />
         }
        })
       }
    }

  render() {
    const { hasErrored, isLoading, items } = this.props;
    if (hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (isLoading) {
      return <p>Loading…</p>;
    }

    return (
    <div className="row back">
      {this.renderItems()}
    </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      items: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);