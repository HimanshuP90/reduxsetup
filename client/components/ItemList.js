import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import News from './News';

class ItemList extends Component {
    
    componentDidMount() {
        this.props.fetchData('https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=72405ce7c4e743e9ad8b105b330c6fe2');
    }

    renderItems() {
        console.log(this.props.items.articles);
        const { items } = this.props;
        if (items.articles) {
            return items.articles.map((item) => {
                return <News key={item.url} item={item} />
            });
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
          <div className="row">
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);