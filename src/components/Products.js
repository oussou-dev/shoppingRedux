import React from "react"
import Product from "./Product"

class Products extends React.Component {
	render() {
		const { products, addToCart } = this.props
		return (
			<div className="row">
				{products.map(product => {
					return (
						<Product
							key={product.id}
							product={product}
							addToCart={addToCart}
						/>
					)
				})}
			</div>
		)
	}
}

export default Products
