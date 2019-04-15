import React from "react"
import Product from "./Product"

class Products extends React.Component {
	render() {
		const { products, handleAddToCart } = this.props
		return (
			<div className="row">
				{products.map(product => {
					return (
						<Product
							key={product.id}
							product={product}
							addToCart={handleAddToCart}
						/>
					)
				})}
			</div>
		)
	}
}

export default Products
