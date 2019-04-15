import React from "react"
import "./App.css"
import Products from "./components/Products"
import { apiURL } from "../apiDB/apiURL"

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			products: [],
			filteredProducts: []
		}
	}

	componentWillMount() {
		fetch(apiURL)
			.then(res => res.json())
			.then(data => {
				this.setState({
					products: data,
					filteredProducts: data
				})
			})
	}

	filteredProducts = () => {
		//
	}

	handleAddToCart = () => {
		//
	}

	render() {
		// console.log(data)
		return (
			<div className="container">
				<h1>Ecommerce Shopping Cart App</h1>
				<hr />

				<div className="row">
					<div className="col-md-8">
						<Products
							products={this.state.filteredProducts}
							handleAddToCart={this.handleAddToCart}
						/>
					</div>
					<div className="col-md-4">
						<p>col-md-4</p>
					</div>
				</div>
			</div>
		)
	}
}

export default App
