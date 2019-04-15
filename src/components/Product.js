import React from "react"

class Product extends React.Component {
	render() {
		const { product } = this.props
		return (
			<div className="col-md-4">
				<div className="thumbnail text-center">{product.title}</div>
			</div>
		)
	}
}

export default Product
