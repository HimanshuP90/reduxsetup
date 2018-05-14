import React from 'react';
import Typed from 'react-typed';

class Welcome extends React.Component {
  componentDidMount() {
    this.props.fetchData('https://www.zopnow.com/toys/discounts.json');
  }


  render() {
    return (
      <div className="jumbotron">
      	<div className="container">
      		<Typed
      			className="type"
 	       		strings={['AutographaMT : Machine Translation Engine']}
 	       		typeSpeed={50}
 	       		loop
 	        />
 	        <br/>
    	</div>
      </div>
    );
  }
}

export default Welcome;