import React from "react"

class Products extends React.Component {
	render() {
		const { products } = this.props
		return (
			<div>
				{products.map(product => {
					return (
						<div className="row" key={product.id}>
							<div className="col-md-4">
								<div className="thumbnail text-center">
									{product.title}
								</div>
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Products
