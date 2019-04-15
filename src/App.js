import React from "react"
import "./App.css"
import Products from "./components/Products"
import { apiURL } from "../apiDB/apiURL"
import Filter from "./components/Filter"

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

	handleAddToCart = () => {
		//
	}

	handleChangeSize = e => {
		this.setState({
			size: e.target.value
		})
		this.listProducts()
	}

	handleChangeSort = e => {
		this.setState({
			sort: e.target.value
		})
		this.listProducts()
	}

	listProducts = () => {
		this.setState(state => {
			if (state.sort !== "") {
				state.products.sort((a, b) =>
					state.sort === "lowest"
						? a.price > b.price
							? 1
							: -1
						: a.price < b.price
						? 1
						: -1
				)
			} else {
				state.products.sort((a, b) => (a.id < b.id ? 1 : -1))
			}

			if (state.size !== "") {
				return {
					filteredProducts: state.products.filter(
						a =>
							a.availableSizes.indexOf(state.size.toUpperCase()) > 0
					)
				}
			}

			return { filteredProducts: state.products }
		})
	}

	render() {
		// console.log(data)
		return (
			<div className="container">
				<div class="jumbotron py-3">
					<h1 class=" text-center display-6">
						Mini Shopping Cart App
					</h1>
				</div>
				{/* <h1 className="text-center">Mini Shopping Cart App</h1> */}
				{/* <hr /> */}

				<div className="row">
					<div className="col-md-8">
						<Filter
							size={this.state.size}
							sort={this.state.sort}
							handleChangeSize={this.handleChangeSize}
							handleChangeSort={this.handleChangeSort}
							count={this.state.filteredProducts.length}
						/>
						<hr />
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
