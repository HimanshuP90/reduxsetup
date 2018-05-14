import React from 'react';

const ProductGrid = ({item}) => (
	<div>
		<div>
	  	<div className="filterModule sort">
		    <ul>
		        <li className="selected">Sort : <span className="js-sort">Relevance</span></li>
		        <li><a data-sort="">Relevance</a></li>
		    </ul>
		</div>
		{console.log(item.data)}
		<header>
		   <h2>{item.data.title}</h2>
		</header>
		</div>
	  <div className="flex">
		  {(item.data.products).map((v, i) => {
		  	return(
					<section className="animation bar" key={i}>
					  <aside>
					    <img src={v.defaultVariant.images[0]} alt="toys" style={{height: "140px", width: "140px"}}/>
				        <div className="itemDescription">
				        <h5>
				        	<strong> &#8377;{v.defaultVariant.discount}</strong>&nbsp;
				            <s>{v.defaultVariant.mrp}</s><br/>
				            <a href={v.defaultVariant.url}>
				            	{v.defaultVariant.full_name}
				            </a>
				        </h5>
				       </div>
					  </aside>
				  </section>
		 		);
		  })}
	  </div>
	</div>
);

export default ProductGrid;