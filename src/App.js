import React from "react"
import "./App.css"
import Products from "./components/Products"
import { apiURL } from "../apiDB/apiURL"
import Filter from "./components/Filter"
import Cart from "./components/Cart"

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			products: [],
			filteredProducts: [],
			cartItems: []
		}
	}

	componentWillMount() {
		fetch(apiURL)
			.then(res => res.json())
			.then(data =>
				this.setState({
					products: data,
					filteredProducts: data
				})
			)

		if (localStorage.getItem("cartItems")) {
			// console.log(localStorage.getItem("cartItems"))
			this.setState({
				cartItems: JSON.parse(localStorage.getItem("cartItems"))
			})
			// console.log(localStorage.getItem("cartItems"))
		}
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

	handleAddToCart = product => {
		{
			/* 
			this.setState(state => {
			const cartItems = state.cartItems
			let productAlreadyInCart = false
			cartItems.forEach(item => {
				if (item.id === product.id) {
					productAlreadyInCart = true
					item.count++
				}
			})
			if (!productAlreadyInCart) {
				cartItems.push({ ...product, count: 1 })
			}
			localStorage.setItem("cartItems", JSON.stringify(cartItems))
			return cartItems
		})
		*/
		}

		const cartItems = [...this.state.cartItems]
		let productAlreadyInCart = false
		cartItems.forEach(item => {
			if (item.id === product.id) {
				productAlreadyInCart = true
				item.count++
			}
		})
		if (!productAlreadyInCart) {
			cartItems.push({ ...product, count: 1 })
		}
		localStorage.setItem("cartItems", JSON.stringify(cartItems))

		this.setState({ cartItems: cartItems })
	}

	handleRemoveCart = item => {
		// cartItems.splice(item, 1)
		const cartItems = [...this.state.cartItems].filter(
			elm => elm.id !== item.id
		)
		// console.log(cartItems)
		localStorage.setItem("cartItems", JSON.stringify(cartItems))
		this.setState({
			cartItems: cartItems
		})
	}

	render() {
		// console.log(data)
		return (
			<div className="container">
				<div className="jumbotron py-3">
					<h1 className=" text-center display-6">
						Mini Shopping Cart App
					</h1>
					<p className="text-center">React / Redux / Fetch API</p>
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
							addToCart={this.handleAddToCart}
						/>
					</div>
					<div className="col-md-4">
						<Cart
							cartItems={this.state.cartItems}
							handleRemoveFromCart={this.handleRemoveCart}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default App
