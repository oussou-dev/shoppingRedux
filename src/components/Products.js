import React from "react"
import Product from "./Product"

class Products extends React.Component {
	render() {
		const { products } = this.props
		return (
			<div>
				{products.map(product => {
					return (
						<div className="row" key={product.id}>
							<Product product={product} />
						</div>
					)
				})}
			</div>
		)
	}
}

export default Products
