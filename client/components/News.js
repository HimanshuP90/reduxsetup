import React from 'react';

const News = ({item}) => (
	<div className="col-sm-4">
		<div className="card">
			<div className="card-image">
				<img src={item.urlToImage} alt={item.title} />
				<span className="cart-title">{item.source.name}</span>
			</div>
			<div className="cart-content">
				{item.title}
			</div>
			<div className="cart-action">
				<a href={item.url} target="_blank">Full article</a>
			</div>
		</div>
	</div>
);

export default News;