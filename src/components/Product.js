import React from "react"
import util from "../../util.js"

class Product extends React.Component {
	render() {
		const { product, addToCart } = this.props
		return (
			<div className="col-md-4 my-4">
				<div className="thumbnail text-center">
					<a herf="#">
						<img
							className=""
							src={product.sku[1]}
							alt={product.title}
						/>
					</a>
					<p>{product.title}</p>
					<div>
						<b>{util.formatCurrency(product.price)}</b>
						<button
							className="btn btn-primary"
							onClick={e => addToCart(e, product)}
						>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Product
