import React from 'react';
import ReactDOM from 'react-dom';

class Dashboard extends React.Component{
	constructor(){
		super();
		this.state = {
			val: 0
		}

		this.update = this.update.bind(this);
	}

	update() {
		this.setState({
			val: this.state.val + 1
		})
	}

	componentWillMount() {
		console.log("%ccomponentWillMount", "color: blue; font-size:15px; font:bold");
	}

	render() {
		console.log('render');
		return(
			<div style={{width: "800px", margin: "0 auto"}}>
			 	<button onClick={this.update}>{this.state.val}</button>
			</div>
		)
	}

	componentDidMount() {
		console.log("%ccomponentDidMount", "color: purple; font-size:15px; font:bold");
		console.log(ReactDOM.findDOMNode(this));
	}

	componentWillUnmount() {
		console.log("%ccomponentWillUnount", "color: black; font-size:15px; font:bold");
	}
}

class Wrapper extends React.Component{
	mount() {
		ReactDOM.render(<Dashboard />, document.getElementById('a')) 
	}

	unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}

	render(){
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>Unmount</button>
				<div id="a">
				</div>
			</div>
		);
	}
}

export default Wrapper;